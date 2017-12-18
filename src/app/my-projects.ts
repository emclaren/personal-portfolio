import { Project } from './project';

export const PROJECTS: Project[] = [

{ id: 1, 
	name: 'Mind-Full',
  thumbname: 'Neurofeedback',
  class: 'mind-full',
  thumbnail:'assets/img/mindfull/mind-full-thumbnail-min.jpg',
  summary:'A neurofeedback application to improve educational outcomes for children with anxiety and attentional challenges.',
  overview: 'Mind-Full is an EEG-neurofeedback system to help kids ages 6-10 learn to self-regulate.',
  team: 'Alissa N. Antle, Perry Tan, Srilekha Kirsh Sridharan, Fan Lin, Emily Cramer',
  tags: 'NeuroSky EEG Headset, Unity Game Engine, Android Development, Audio',
  role: 'Developer, Tester, Project Manager, Researcher (further details below)',
  challengeHeading:'Improving and adapting an existing tool for new users.',
  c1:'Children in North America are more likely to suffer from anxiety and attentional challenges than any other mental health issue. These children often have challenges staying calm and attentive in classroom environments. But how can they calm down and focus, if they don’t know how this feels?',
  c2:'We developed Mind-Full to help kids practice controlling their mental state, and better understand what it feels like to be in a calm, attentive state of mind. This system uses a consumer EEG-headset to provide real-time feedback on children’s stress and attention levels, rewarding them for achieving goals.',
  c3: 'I joined the team in 2016, we had an existing prototype that we wanted to refine and redesign for an upcoming study with a local school district. In my work on this project I contributed to the development of new games, helped run multiple studies, analyzed results, and co-authored several papers. My master’s research also stems from this work.',
  c4: '',
  cvideo:'show',
  cvideoClass:'show',
  cVideofigCaption:'We created this video about Mind-Full to help people better understand the project (I co-wrote the script and recorded the voiceover):',
  problemHeading1:'Creating new games',
  problemHeading2:'Research Studies',
  problemHeading3:'',
  p1:'Mind-Full conisted of a series of three games, two for relaxation, one for attention. The original games were intended for children in Nepal, the scenarios involved playing with a pinwheel, watching a paraglider land, and stacking stones. However, this imagery would not have been appealing to the groups we wanted to work with. In consultation with two groups with whom we were planning on running studies, we created two new sets of games. The first was for local first nations children, the new games involved bears, salmon and ravens. The other was for a local school population, we used a silly squirrel and a sasquatch.',
  p2:'I contributed to the ideation of the new games, and the user interaction. There was a challenge in that the games needed to be entertaining enough for children’s sustained gameplay, but not distracting from the task at hand – concentrating on their mental activity to help them learn what it feels like to be calm. I managed the testing of the application, ensuring it worked consistently on different devices, and assisted with fixing bugs. ',
  p3:'I did a controlled experiment with Mind-Full last fall. I have run a controlled waitlist study using the system with 25 adults. I assisted with running a study with 28 children in the Burnaby School District. I am in the process of running a co-design study with children ages 8-9 at a school in Vancouver.',
  p4:'I have five publications related to this work, one in particular is on the the design of the new games for North American Children. And was thrilled that it was recently accepted to a leading journal in the Human Computer Interaction Field (ACM Transaction on Human Computer Interaction.)',
  process: 'testing process',
  resultHeading1: 'Neurofeedback may be effective to help children learn to self-regulate',
  resultHeading2:'',
  resultHeading3:'Personal Achievements',
  r1:'We are currently in the midst of our analysis of the results. But our results show that kids can take these skills and apply them outside of context of using the app.',
  r2:'Children reported that they wanted to have sound in this game. As a result, I’m working with children as a design partners with 20 students from a local elementary school. This work is ongoing, and I hope to complete my co-design data collection by February 2017. This work will contribute knowledge about the impact of audio feedback on children\'s (relaxed vs. anxious) brain states, the efficacy of audio in NF apps, and produce an enhanced NF system for use in future studies.',
  r3:'I’m excited to have had a chance to work with neural data. This experience enabled me to better understand networking, and how to work with complex time-series data. I recently had an opportunity to better explore these skills by creating a neurofeedback system from scratch using an Open BCI  8 channel EEG headset, Nodejs & p5js at BrainHackDC 2017.',
  cImage1: 'assets/img/mindfull/mind-full-thumbnail-min.jpg', 
  cImage2:'assets/img/mindfull/mind-fullimg-min.png',
  cImage3: 'assets/img/mindfull/squirrel-min.png',
  cImage1Class: 'col-xs-12 col-sm-4 col-lg-4',
  cImage2Class: 'col-xs-12 col-sm-4 col-lg-4',
  cImage3Class: 'col-xs-12 col-sm-4 col-lg-4',
  pImage1:'assets/img/mindfull/design-min.jpg',
  pImage2:'assets/img/mindfull/design2.jpg',
  pImage3:'assets/img/mindfull/unity.png',
  pImage1Class:'col-xs-12 col-sm-4 col-lg-4 ',
  pImage2Class:'col-xs-12 col-sm-4 col-lg-4 ',
  pImage3Class:'col-xs-12 col-sm-4 col-lg-4 ',
  pImage4:'assets/img/mindfull/mind-full-min.jpg',
  pImage5:'assets/img/mindfull/IMG_5145-min.JPG',
  pImage6:'assets/img/mindfull/mindfull-testing.png',
  pImage4Class:'col-xs-12 col-sm-4 col-lg-4',
  pImage5Class:'col-xs-12 col-sm-4 col-lg-4',
  pImage6Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage1:'assets/img/mindfull/badge2.jpg',
  rImage2:'assets/img/mindfull/sfn-min.jpg',
  rImage3:'assets/img/mindfull/headphones.jpg',
  rImage1Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage2Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage3Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage4:'assets/img/brainhack-min.jpg',
  rImage5:'assets/img/brainhack2-min.jpg',
  rImage6:'assets/img/brainhack-close-min.png',
  rImage4Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage5Class:'col-xs-12 col-sm-4 col-lg-4',
  rImage6Class:'col-xs-12 col-sm-4 col-lg-4'
},
{ id: 2, 
	name: 'Block Talks', 
  thumbname: 'AR for Literacy',
  class: 'block-talks',
  thumbnail:'assets/img/blocktalks/block-talks-thumbnail-min.jpg',
  summary:'A tangible augmented reality toolkit to help children learn to read. ',
  overview: 'Block talks is a tangible Augmented Reality toolkit to help kids ages 7-9 learn to read.',
  team: 'Uddipana Baishya, Min Fan, Shubhra Sarkar, and Amal Vincent',
  tags: 'Augmented Reality, Unity Game Engine, Tangible, Games for Education',
  role: 'Ideation, Development, Project Pitch (details below)', 
  cvideo:'none',
  cvideoClass:'none',
  challengeHeading:'Improving and adapting an existing tool for new users.',
  c1:'Over 10% of children have trouble learning to read and spell. This is not an easy, and can be frustrating for kids - especially when they are unable to get immediate feedback from teachers. Block talks was designed with these kids in mind. It is intended for a semi-supervised environment. Blocks Talks consists of a set of physical letters, coloured blocks with physical notch, and an application running in a tablet. Children place letters on top of the blocks to make words and sentences. They can then check their spelling, and receive feedback using the tablet application, and view augmented reality.',
  c2:'Block talks is an ongoing research project developed during Eduhacks hackathon 2017. Our team of SIAT students won 3rd place out of 66 teams. I was involved throughout the development of the project. This was a very collaborative team effort.',
  c3: '',
  c4: '',
  cfigCaption:'Block Talks Logo',
  problemHeading1:'Creating new games',
  problemHeading2:'Research Studies',
  problemHeading3:'',
  p1:'This project extends on my unversity’s lab\'s work on games for learning and tangible computing. We arrived at the hackathon with a bag of supplies (blocks/glitter/magnets). Before we began ideating, we created a criteria for our project. We wanted it to be:1) Related to our collective research interests (VR, Kids, literacy) 2)  Practicable – could we develop a working prototype within the 24 hour time constraint. 3) Useful – is there a real world application for our project. ',
  p2:' We started off by quickly coming up with a list of 8 project ideas, and then refining this based off our earlier criteria. We decided on the Block Talks projects because it was the best match. Next, as a team we started researching the tools and doing a market analysis of similar apps. I was responsible for finding English Language curriculum ideas that could work well within the context of the app. ',
  p3:'Next we started building out physical prototypes using items commonly found at a dollar store. Although they were not quite appropriate for our purposes (for example, the blocks were too small for young children), we used them regardless to quickly get our ideas out. Over the course of the evening (and night, and morning), I gathered multimedia for the system for the developer, I created a landing page to promote the concept, and a presentation for the jduges. As a comfortable public speaker, I was responsible for pitching the projet during multiple rounds of evaluation. ',
  p4:'',
  process:'testing process',
  resultHeading1: 'Improving the feedback & user testing',
  resultHeading2:'',
  resultHeading3:'',
  r1:'We were thrilled to earn 3rd place in this competition. We received excellent feedback from the judges, and won scholarships to help us bring this application to market when it’s ready.  We have written a work in progress paper which we are hoping to submit to conferences soon. We are currently working to develop a learning curriculum that could accompany the application, and improve the feedback process (See below), we hope to run user testing on it in the winter ',
  r2:'',
  r3:'',
  cImage1: 'assets/img/block-talks-min.jpg',
  cImage2: 'assets/img/example-min.jpg',
  cImage3: 'assets/img/block-talk-prototype-min.jpg',
  cImage1Class: 'col-xs-12 col-sm-6 col-lg-4 ',
  cImage2Class: 'col-xs-12 col-sm-6 col-lg-4 ',
  cImage3Class: 'col-xs-12 col-sm-6 col-lg-4 ',
  pImage1:'assets/img/blocktalks-min.jpg',
  pImage2:'assets/img/DLGmjrSUMAAWfQs.jpg_large',
  pImage3:'assets/img/block-talks-thumbnail-min.jpg',
  pImage1Class:'col-xs-12 col-sm-6 col-lg-4 ',
  pImage2Class:'col-xs-12 col-sm-6 col-lg-4 ',
  pImage3Class:'col-xs-12 col-sm-6 col-lg-4 ',
  pImage4:'',
  pImage5:'',
  pImage6:'',
  pImage4Class:'none ',
  pImage5Class:'none ',
  pImage6Class:'none',
  rImage1Class:'none',
  rImage2Class:'none',
  rImage3Class:'none',
  rImage4:'',
  rImage5:'',
  rImage6:'',
  rImage4Class:'none',
  rImage5Class:'none',
  rImage6Class:'none',
  
},
{ id: 3, 

  name: 'Audio-Matic',
  thumbname: 'AI Music',
  class: 'audio-matic',
  thumbnail:'assets/img/audiomatic/audio-matic-thumbnail-min.jpg',
  summary:'In winter 2017, I created an interactive audio applications for AI toolkits',
  overview: 'Audio-Matic is a novel means of encouraging playful, accessible experiences with AI technology.',
  team: 'Contributions by Dr. Steve Dipaolo',
  tags: 'Deep Learning (Magenta/TensorFlow), MaxMSP, Arduino Microcontroller, Hardware, Sound',
  role: 'Designer, Developer',
  cvideo:'none',
  cvideoClass:'none',

},
{ id: 4, 
  name: 'Tangible Audio', 
  thumbname: 'Tangible Audio',
  class: 'tangibles',
  thumbnail:'assets/img/tangibles/tangibles-thumbnail-min.jpg',
  summary:'Beginning in Fall 2015, I began developing tech to lowering the barriers to kids musical performance',
  overview: 'Tangible instruments is a series of DIY music controllers to help kids with performance anxiety feel comfortable playing music.',
  team: 'Contributions from campers at Rock Camp for Girls Montreal & New York',
  tags: 'Open source Microcontrollers, NodeJS, Sensors, Toys and Tangibles',
  role: 'Designer, Developer, UX researcher',
  cvideo:'none',
  cvideoClass:'none',

},
{ id: 5, 
  name: 'Virtual Earthgazing',
  thumbname: 'VR Earthgazing',
  class: 'earthgazing',
  thumbnail:'assets/img/earthgazement/earthgazing-thumbnail-min.jpg',
  summary:'In fall 2017 I collaborated with researcher from the iSpace lab to study the power of VR to make people feel more connected to the earth.',
  overview: 'Virtual Earthgazing is a project investigating the potential of VR to enable individuals to experience the overview effect, the awe-inspiring experience of seeing Earth from space resulting in a heightened awareness of the planet.',
  team: 'Worked with with SIAT\'s iSpace lab ( Bernard Riecke, Katerina Stepanova, Denise Quesnel, Alex Kitson, Mirjana Prpa, Ivan Aguilar',
  tags: 'Virtual Reality, HTC Vive, Unity Game Engine',
  role: 'Researcher (details below)',
 cvideo:'none',
  cvideoClass:'none',

},
{ id: 6, 
  name: 'Asking for a Friend',
  thumbname: 'Health Chatbot',
  class: 'asking-for-a-friend', 
  thumbnail:'assets/img/asking/asking-for-a-friend-thumbnail-min.jpg',
  summary:'In fall 2017, a team of students developed a tool to improving accessibility of mental health resources for youth.',
  overview: 'Asking For a Friend is a chatbot designed to connect individuals seeking help with mental health challenges with local resources and support.',
  team: 'Vivian Pan, Joanna Zhao, Natasha Caton',
  tags: 'NodeJS, Microsoft Azure Bot Framework',
  role: 'DeIdeation, Developed front end usability, Coded the backend with Vivian Pan',
cvideo:'none',
  cvideoClass:'none',


}

];
