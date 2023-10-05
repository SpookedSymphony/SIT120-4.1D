<style scoped>
    .container {
        background: teal;
        padding: 20px; 
        display: flex;
    }
    
    .left {
        flex: 1;
        padding: 16px;
        background: white;;
        padding: 20px;
    }

    .right {
        flex: 2;
        padding: 8px;
        background: White;
    }

    .padded {
        padding: 16px;
    }

    hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    }

    img {
        width:100%;
        border: 3px solid teal;
    }
    .img {
        transition: box-shadow 2s;
    }

    .img:hover{
        box-shadow: 0 0 0 10px darksalmon;
    }

    .p {
        transition: text-decoration 0.5s;
    }
    .p:hover {
        text-decoration: underline;
        text-decoration-color: slategray;
    }
</style>

<template>
    <body>    
      <div class="container"> 
        <div class="left">
          <div class="img">
            <img src="@/assets/me.jpg" alt="Me">
          </div>
          <div class="padded">
            <h1 style="font-size:25px">AMELIA SCHULTZ</h1>
            <div class="p">
                <p>Web Developer</p>
                <p>Victoria, AUS</p>
                <p>AS@gmail.com</p>
                <p>0487916548</p>
            </div>
          </div>
          <hr>
          <h1 style="font-size:25px">LANGUAGES</h1>
          <div class="p">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>SQL</p>
            <p>C++</p>
        </div>
          <hr>
          <h1 style="font-size:25px">OTHER SKILLS</h1>
          <div class="p">
            <p>UX Design</p>
            <p>Web Development</p>
            <p>Data Analysis</p>
        </div>
        </div>
        <div class="right">
          <h1>Work Experience</h1>
          <h1 style="font-size:20px">GOOGLE</h1>
          <div class="p">
            <p> 2020 - Current </p>
            <p> At Google, I was the lead web developer and managed a team of professionals. I was responsible for ensuring projects were delivered on time and at a desirable standard. </p>
          </div>
          <hr>
  
          <h1 style="font-size:20px">VALVE</h1>
          <div class="p">
            <p> 2019 - 2020 </p>
            <p> At Valve, I was a part of a small group of developers working on designing web applications. The team I was collaborating with was consistently the highest-achieving team in the company. </p>
          </div>
          <hr>
  
          <h1 style="font-size:20px">HI-REZ</h1>
          <div class="p">
            <p> 2017-2019 </p>
            <p>At Hi-Rez Studios, I was involved in developing and maintaining the company's main website, which displayed up-to-date information on their products. </p>
          </div>
          <hr>
  
          <h1>Education</h1>
          <h1 style="font-size:20px">Bachelor's in I.T. - Web Development</h1>
          <div class="p">
            <p>Deakin University</p>
            <p>2014 - 2017</p>
          </div>
        </div>
      </div>
    </body>
  </template>