import { Component, OnInit } from '@angular/core';
import { AdobecartService } from '../adobecart.service';

@Component({
  selector: 'app-adobe',
  templateUrl: './adobe.component.html',
  styleUrls: ['./adobe.component.css']
})
export class AdobeComponent implements OnInit {
  a="Acrobat pro DC";
  b="Acrobat Standard DC";
  c="Adobe Audition";
  d="Adobe Dimension";
  e="Adobe Fresco";
  f="Adobe Premium Pro CC";
  g="Adobe premium rush CC";
  h="Adobe Stock (Large)";
  i="Adobe Stock (Other)";
  j="Adobe Stock (Small)";
  k="Adobe Technical Suit";
  l="Adobe XD";
  m="After Effects CC";
 n="Animate/Flash Professional";
 o="Captivate CC";
  p="Create Cloud For Teams All Apps";
  q="Create Cloud For Teams All Apps With Adobe Stock";
  r="Dreamweaver CC";
  s="Framemaker";
  t="Illustrator CC";
  u="InCopy CC";
  v="InDesign CC";
  w="Lightroom W Classic";
  x="Photoshop CC";
  y="Presenter Video Express";
  z="Robo Help Office";
  ad="More than five million organisations around the world rely on Acrobat DC to create and edit the smartest PDFs, convert PDFs to Microsoft Office formats and so much more. When you’re on the move and you need to collaborate with colleagues in multiple locations, trust the power of Acrobat DC to make it happen." ;
  bd="More than five million organisations around the world rely on Acrobat DC to create and edit the smartest PDFs, convert PDFs to Microsoft Office formats and so much more. When you’re on the move and you need to collaborate with colleagues in multiple locations, trust the power of Acrobat DC to make it happen.";
  cd="Audition is a comprehensive toolset that includes multitrack, waveform and spectral display for creating, mixing, editing and restoring audio content. This powerful audio workstation is designed to accelerate video production workflows and audio finishing — and deliver a polished mix with pristine sound.";
  dd="Create engaging 3D content faster with high-quality models, materials and lighting. Dimension makes it easy to build brand visualisations, product mockups, packaging designs, spatial designs and other creative work.";
  ed="Built for the latest stylus and touch devices, Adobe Fresco brings together the world’s largest collection of vector and raster brushes, plus revolutionary new live brushes, to deliver a completely natural painting and drawing experience. For artists, illustrators, animators, sketchers and anyone who wants to discover — or rediscover — the joy of drawing and painting.";
  fd="Premiere Pro is the industry-leading video editing software for film, TV and the web. Creative tools, integration with other apps and services and the power of Adobe Sensei help you craft footage into polished films and videos. With Premiere Rush you can create and edit new projects from any device.";
  gd="Feed your followers a steady stream of amazing by creating and sharing online videos with Adobe Premiere Rush. It’s easy to use across all your devices and it’ll transform the way you create content.";
  hd="With new content added daily, Adobe Stock is powered by creatives, for creatives. Search and licence millions of high-quality assets right inside your Adobe Creative Cloud apps. It’s all here, including images, graphics, videos, templates, 3D assets and our Premium and Editorial collections. All so you can make something amazing.";
  id="With new content added daily, Adobe Stock is powered by creatives, for creatives. Search and licence millions of high-quality assets right inside your Adobe Creative Cloud apps. It’s all here, including images, graphics, videos, templates, 3D assets and our Premium and Editorial collections. All so you can make something amazing.";
  jd="With new content added daily, Adobe Stock is powered by creatives, for creatives. Search and licence millions of high-quality assets right inside your Adobe Creative Cloud apps. It’s all here, including images, graphics, videos, templates, 3D assets and our Premium and Editorial collections. All so you can make something amazing.";
  kd="Adobe Technical Communication Suite gives you five cutting-edge products that transform your technical, eLearning and business content into exceptional experiences. Boost productivity as you work on long, complex XML and non-XML content with Adobe FrameMaker. Deliver highly personalised Help, policy and knowledgebase content experiences with Adobe RoboHelp. Create responsive eLearning content with Adobe Captivate and transform presentations to enable on-demand learning with Adobe Presenter. Collaborate in real time with shared PDF reviews with Adobe Acrobat.";
  ld="With Adobe XD, you get one powerful tool for your whole UI/UX design process. Create user flows, wireframes, high-fidelity designs, interactive prototypes, animations and more — no need to switch between multiple apps or worry about keeping designs in sync.";
  md="Create cinematic movie titles, intros, and transitions. Remove an object from a clip. Start a fire or make it rain. Animate a logo or character. With After Effects, the industry-standard motion graphics and visual effects software, you can take any idea and make it move.";
  nd="Design interactive animations for games, TV shows and the web. Bring cartoons and banner ads to life. Create animated doodles and avatars. And add action to eLearning content and infographics. With Animate, you can quickly publish to multiple platforms in just about any format and reach viewers on any screen.";
  od="Adobe Captivate is an authoring tool that is used for creating eLearning content such as software demonstrations, software simulations, branched scenarios, and randomized quizzes in Shockwave Flash (.swf, a.k.a. ‘Small Web Format’) and HTML5 formats.";
  pd="Creative Cloud is a collection of 20+ desktop and mobile apps and services for photography, design, video, web, UX and more. Now you can take your ideas to new places with Photoshop on the iPad, draw and paint with Fresco and design for 3D and AR. Join our global creative community — and make something better together.";
  qd="Creative Cloud is a collection of 20+ desktop and mobile apps and services for photography, design, video, web, UX and more with Adobe Stock. Now you can take your ideas to new places with Photoshop on the iPad, draw and paint with Fresco and design for 3D and AR. Join our global creative community — and make something better together.";
  rd="Quickly create and publish web pages almost anywhere with web design software that supports HTML, CSS, JavaScript and more.";
  sd="Work on long, complex content more productively with the powerful capabilities of Adobe FrameMaker. Author in XML or DITA with a powerful, easy-to-use workspace. Create rich, immersive experiences using online videos and unmatched image handling. Collaborate seamlessly using Online Review. Easily take your content to global audiences with new support for XLIFF. Publish for a range of devices from a single source as WYSIWYG PDF, Responsive HTML5, EPUB, mobile app and more.";
  td="The industry-standard vector graphics software is used by millions of designers and artists to create everything from gorgeous web and mobile graphics to logos, icons, book illustrations, product packaging and billboards.";
  ud="InCopy lets copywriters and editors style text, track changes and make simple layout modifications to a document while designers work on the same document simultaneously in Adobe InDesign — all without overwriting each other’s contributions.";
  vd="Adobe InDesign is the industry-leading layout and page design software for print and digital media. Create beautiful graphic designs with typography from the world’s top foundries and imagery from Adobe Stock. Quickly share content and feedback in PDF. Easily manage production with Adobe Experience Manager. InDesign has everything you need to create and publish books, digital magazines, eBooks, posters, interactive PDFs and more. ";
  wd="Lightroom Classic gives you all the desktop editing tools you need to bring out the best in your photos. Punch up colours, make dull-looking shots vibrant, remove distracting objects and straighten skewed shots. Easily organise all your photos on your desktop and share them in a variety of ways.";
  xd="From everyday edits to total transformations, Photoshop CC puts the power of the world's best imaging  and design app at your fingertips. Enhance, crop, retouch, and add effects to your photos. Design websites  and mobile apps. Create 3D artwork, videos, and much more. Getting started is fast and easy.";
  yd="Create, edit and publish rich, interactive HD videos in just 3 steps. Capture anything on your screen or your webcam feed or bring in videos from your tablet, phone or any external source. Mix them any way you want and include quizzes to better engage viewers. Use your videos for product demos, distance learning, customer support, as marketing collateral or social media content and more.";
  zd="Create and deliver exceptional Help, policy and procedure and knowledgebase content with Adobe RoboHelp, now also on Mac. Author micro content to fuel chatbots, featured snippets in search results and more. Create media-rich experiences using HTML5 and CSS3. Make collaboration seamless using web-based review capabilities. Personalise customer experiences using Dynamic Content Filters. Publish content as Frameless Responsive HTML5, PDF, mobile app and much more to serve customers across all touchpoints.";
  
  isActive = true;
  public titleStyles={
    color:"white",
    fontStyle:"verdana",
    fontSize:"50"
  }
  public headingStyles={
    color:"lightblue",
    fontStyle:"verdana",
    fontSize:"50"
    
  }

  constructor(private _productname:AdobecartService) { }

  ngOnInit(): void {
  }
  
  A()
  {
    console.log("adobename"+ this.a);
    this._productname.productname=this.a;
    this._productname.productdescription=this.ad;
    this._productname.url='https://www.youtube.com/embed/-wJYjCHOoN8';
    this._productname.path='';
  }
  B()
  {
    this._productname.productname=this.b;
    this._productname.productdescription=this.bd;
    this._productname.url='https://www.youtube.com/embed/-wJYjCHOoN8';
    this._productname.path='';

  }
  C()
  {
    this._productname.productname=this.c;
    this._productname.productdescription=this.cd;
    this._productname.url='https://www.youtube.com/embed/7EZzNSYaeHY';
    this._productname.path='';
  }
  D()
  {
    this._productname.productname=this.d;
    this._productname.productdescription=this.dd;
    this._productname.url='https://www.youtube.com/embed/o2Rw_kD_PGo';
    this._productname.path='';
  }
  E()
  {
    this._productname.productname=this.e;
    this._productname.productdescription=this.ed;
    this._productname.url='https://www.youtube.com/embed/4pzDJxKvPek';
    this._productname.path='';
  }
  F()
  {
    this._productname.productname=this.f;
    this._productname.productdescription=this.fd;
    this._productname.url='https://www.youtube.com/embed/3b3Rc77JrUo';
    this._productname.path='';
  }
  G()
  {
    this._productname.productname=this.g;
    this._productname.productdescription=this.gd;
  
    this._productname.url='https://www.youtube.com/embed/v7rlddGJsPo';
    this._productname.path='';
  }
  H()
  {
    this._productname.productname=this.h;
    this._productname.productdescription=this.hd;
    this._productname.url='https://www.youtube.com/embed/c8kqTWdPgnE';
    this._productname.path='';
  }
  I()
  {
    this._productname.productname=this.i;
    this._productname.productdescription=this.id;
    this._productname.url='https://www.youtube.com/embed/c8kqTWdPgnE';
    this._productname.path='';
  }
  J()
  {
    this._productname.productname=this.j;
    this._productname.productdescription=this.jd;
    this._productname.url='https://www.youtube.com/embed/c8kqTWdPgnE';
    this._productname.path='';
  }
  K()
  {
    this._productname.productname=this.k;
    this._productname.productdescription=this.kd;
    this._productname.url='https://www.youtube.com/embed/YmfjYbaxROs';
    this._productname.path='';
  }
  L()
  {
    this._productname.productname=this.l;
    this._productname.productdescription=this.ld;
    this._productname.url='https://www.youtube.com/embed/IQmZUuANmhA';
    this._productname.path='';
  }
  M()
  {
    this._productname.productname=this.m;
    this._productname.productdescription=this.md;
    this._productname.url='https://www.youtube.com/embed/iKG0SV8bZIU';
    this._productname.path='';
  }
  N()
  {
    this._productname.productname=this.n;
    this._productname.productdescription=this.nd;
    this._productname.url='https://www.youtube.com/embed/YhoqpbesFs0';
    this._productname.path='';
  }
  O()
  {
    this._productname.productname=this.o;
    this._productname.productdescription=this.od;
    this._productname.url='https://www.youtube.com/embed/EhKW_6yAK2I';
    this._productname.path='';
  }
  P()
  {
    this._productname.productname=this.p;
    this._productname.productdescription=this.pd;
    this._productname.url='https://www.youtube.com/embed/NFzisYTbvHk';
    this._productname.path='';
  }
  Q()
  {
    this._productname.productname=this.q;
    this._productname.productdescription=this.qd;
    this._productname.url='https://www.youtube.com/embed/NFzisYTbvHk';
    this._productname.path='';
  }
  R()
  {
    this._productname.productname=this.r;
    this._productname.productdescription=this.rd;
    this._productname.url='https://www.youtube.com/embed/Ak_vbnl-5zs';
    this._productname.path='';
  }
  S()
  {
    this._productname.productname=this.s;
    this._productname.productdescription=this.sd;
    this._productname.url='https://www.youtube.com/embed/6QvGCz_EAsU';
    this._productname.path='';
  }
  T()
  {
    this._productname.productname=this.t;
    this._productname.productdescription=this.td;
    this._productname.url='https://www.youtube.com/embed/6ptc3I6L8Wg';
    this._productname.path='';
  }
  U()
  {
    this._productname.productname=this.u;
    this._productname.productdescription=this.ud;
    this._productname.url='https://www.youtube.com/embed/q2SP4q9lubQ';
    this._productname.path='';
  }
  V()
  {
    this._productname.productname=this.v;
    this._productname.productdescription=this.vd;
    this._productname.url='https://www.youtube.com/embed/6Zsq5RCYTiE';
    this._productname.path='';
  }
  W()
  {
    this._productname.productname=this.w;
    this._productname.productdescription=this.wd;
    this._productname.url='https://www.youtube.com/embed/3b3jpPIDyqg';
    this._productname.path='';
  }
  X()
  {
    this._productname.productname=this.x;
    this._productname.productdescription=this.xd;
    this._productname.url='https://www.youtube.com/embed/FOix0Wn5UXQ';
    this._productname.path='';
  }
  Y()
  {
    this._productname.productname=this.y;
    this._productname.productdescription=this.yd;
    this._productname.url='https://www.youtube.com/embed/vcZOX9NR5qQ';
    this._productname.path='';
  }
  Z()
  {
    this._productname.productname=this.z;
    this._productname.productdescription=this.zd;
    this._productname.url='https://www.youtube.com/embed/6btMDb8Kfzs';
    this._productname.path='';
  }


}
