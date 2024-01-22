import { Component,AfterViewInit, OnInit, ViewChild, ElementRef, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderRangeComponent } from './slider-range/slider-range.component';
import { PlaySvgComponent } from '../assets/SVGComponents/play-svg/play-svg.component';
declare var MediaRecorder: any;
import { SVGDetails } from '../assets/SVGComponents/svgdetails';
import { CutSvgComponent } from '../assets/SVGComponents/cut-svg/cut-svg.component';
@Component({
  selector: 'app-videotrimmer',
  standalone: true,
  imports: [CommonModule, SliderRangeComponent, PlaySvgComponent, CutSvgComponent],
  templateUrl: './trim-video-component.component.html',
  styleUrl: './trim-video-component.component.css'
})
export class VideotrimmerComponent implements OnInit, AfterViewInit{
  private mediaSource = new MediaSource();
  svgDetail:SVGDetails = {
    fill:"black",
    size:"20px"

  }
  svgDetail2:SVGDetails = {
    fill:"black",
    size:"15px"

  }
  private stream : any;
  private mediaRecorder : any;
  private recordedBlobs : any;
  private sourceBuffer : any;
  private superBuffer : any;

  private initTime ;
  private lastTime;

  enableRecord = false;  
  @ViewChild('video') video!:ElementRef<HTMLVideoElement>;
 
  //@ViewChild('video2') video2:ElementRef<HTMLVideoElement>;

  @Input() source!:string;

  @Output() base64:EventEmitter<any> = new EventEmitter();

  duration = 0;

  constructor(
    private cdr:ChangeDetectorRef
  ) { }
  ngOnInit() {
    
    // this.mediaSource.addEventListener('sourceopen', this.handleSourceOpen, false);
    // this.video.nativeElement.ontimeupdate = ()=>{
    //   console.log("current",this.video.nativeElement.currentTime,this.lastTime);
    //   if(this.lastTime && this.video.nativeElement.currentTime >= this.lastTime){
    //     this.video.nativeElement.pause();
    //     if(this.enableRecord){
    //       this.stopRecording();
    //       this.enableRecord = false;
    //       this.cdr.detectChanges();
    //     }
    //   }
    // }
    // console.log("Videooo is",this.video)
    // window['video'] = this.video;
    // this.video.nativeElement.onloadeddata = ()=>{
    //   console.log("dectectChanges",this.video.nativeElement.duration);
    //   this.duration = this.video.nativeElement.duration;
    //   console.log(this.duration)
    //   this.cdr.detectChanges();
    // }
  }
  ngAfterViewInit() {
    console.log("Video is", this.video);
     
    this.mediaSource.addEventListener('sourceopen', this.handleSourceOpen, false);
    this.video.nativeElement.ontimeupdate = ()=>{
      console.log("current",this.video.nativeElement.currentTime,this.lastTime);
      if(this.lastTime && this.video.nativeElement.currentTime >= this.lastTime){
        this.video.nativeElement.pause();
        if(this.enableRecord){
          this.stopRecording();
          this.enableRecord = false;
          this.cdr.detectChanges();
        }
      }
    }
    console.log("Videooo is",this.video)
    window['video'] = this.video;
    this.video.nativeElement.onloadeddata = ()=>{
      console.log("dectectChanges",this.video.nativeElement.duration);
      this.duration = this.video.nativeElement.duration;
      console.log(this.duration)
      this.cdr.detectChanges();
    }
    // Additional logic that relies on the video element
  }
  play(){
    this.video.nativeElement.currentTime = this.initTime;
    this.video.nativeElement.play();
    if(this.enableRecord){
      this.startRecording();
    }
  }

  trimVideo(){
    this.enableRecord = true;
    this.play();
  }

  setTimeInit(value){
    if(this.video && this.video.nativeElement.duration){
      this.initTime = value;
      console.log("value",this.initTime);
      this.video.nativeElement.currentTime = this.initTime;
    }
  }

  setTimeLast(value){
    let timeFinish = value;
    this.lastTime = timeFinish;
  }

  handleSourceOpen(){
    this.sourceBuffer = this.mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
  }

  handleDataAvailable(event:any){
    if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
    }
  }

  handleStop(event:Event) {
      console.log('Recorder stopped: ', event);
      this.superBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
      //this.video2.nativeElement.src = window.URL.createObjectURL(this.superBuffer);
      var reader = new FileReader();
      reader.readAsDataURL(this.superBuffer); 
      reader.onloadend = () => {
        let base64data = reader.result;                
        console.log(base64data);
        this.base64.emit(base64data);
    }
      
  }

  startRecording() {
    let options = {mimeType: 'video/webm'};
    this.recordedBlobs = [];
    if((<any>this.video.nativeElement).captureStream) {
      this.stream = (<any>this.video.nativeElement).captureStream();
    }else if((<any>this.video.nativeElement).mozCaptureStream) {
      this.stream = (<any>this.video.nativeElement).mozCaptureStream();      
    }
    try {
        this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (e0) {
        console.log('Unable to create MediaRecorder with options Object: ', e0);
        try {
        options = {mimeType: 'video/webm,codecs=vp9'};
        this.mediaRecorder = new MediaRecorder(this.stream, options);
        } catch (e1) {
        console.log('Unable to create MediaRecorder with options Object: ', e1);
        try {
            options = <any>'video/vp8'; // Chrome 47
            this.mediaRecorder = new MediaRecorder(this.stream, options);
        } catch (e2) {
            alert('MediaRecorder is not supported by this browser.\n\n' +
            'Try Firefox 29 or later, or Chrome 47 or later, ' +
            'with Enable experimental Web Platform features enabled from chrome://flags.');
            console.error('Exception while creating MediaRecorder:', e2);
            return;
        }
      }
    }
    console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);
    this.mediaRecorder.onstop = (event)=>{
      this.handleStop(event);
    };
    this.mediaRecorder.ondataavailable = (event)=>{
      this.handleDataAvailable(event);
    };
    this.mediaRecorder.start(100); // collect 100ms of data
    console.log('MediaRecorder started', this.mediaRecorder);
  }

  stopRecording() {
    this.mediaRecorder.stop();
    console.log('Recorded Blobs: ', this.recordedBlobs);
    //this.video2.nativeElement.controls = true;
  }
  



}
