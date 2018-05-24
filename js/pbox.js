var displayDescription = function(n){
	s1 = "pbox-";

	proj1Desc = "Generated text commands from image and text inputs using Generative Adversarial Networks. Find out more in the link below!";
	proj2Desc = "Developed a custom neural network to predict the prices of expensive paintings using images from Blouin ArtInfo";
	proj3Desc = "Implemented LAW's filter based Texture Classification and Segmentation algorithms using OpenCV and C++ on USC SIPI's dataset";
	proj4Desc = "Developed an IOT based intelligent wearable device for the safety and security of women and girl children";
	proj5Desc = "Performed some basic image recognition using the LeNet 5 architecture on the CIFAR-10 dataset using Tensorflow's tflearn library";
	proj6Desc = "Tinkered a bit with some web development frameworks like Bootstrap and JavaScript to get this website to look presentable! (I hope)";

	proj1Link = "https://github.com/MadhviKannan/CSCI-599-Text-to-Image-Synthesis";
	proj2Link = "http://www.blouinartinfo.com/";
	proj3Link = "https://github.com/MadhviKannan/CSCI-569-ImageProcessing/tree/master/EE_569_Homework3";
	proj4Link = "https://ieeexplore.ieee.org/document/7808003/";
	proj5Link = "https://github.com/MadhviKannan/CSCI-569-ImageProcessing/tree/master/EE_569_Homework4";
	//proj6Link = "Link 6";

	selectedProjDesc = "";
	selectedProjLink = "";
	getLink=""

	if(n==1){
		selectedProjDesc = proj1Desc;
		selectedProjLink = proj1Link;
	}
	else if(n==2){
		selectedProjDesc = proj2Desc;
		selectedProjLink = proj2Link;
	}
	else if(n==3){
		selectedProjDesc = proj3Desc;
		selectedProjLink = proj3Link;
	}
	else if(n==4){
		selectedProjDesc = proj4Desc;
		selectedProjLink = proj4Link;
	}
	else if(n==5){
		selectedProjDesc = proj5Desc;
		selectedProjLink = proj5Link;
	}
	else if(n==6){
		selectedProjDesc = proj6Desc;
		//selectedProjLink = proj6Link;
	}
	else {

	}

	document.getElementById(s1.concat(n)).innerHTML = "<div class=\"project-name\"></div><p>" + selectedProjDesc + "</p><div class=\"project-category text-faded\"><a style=\"text-decorations:none; color:inherit;\" href=\"" + selectedProjLink + "\"target=\"_blank\">LINK</a></div>";

}

var defaultProj = function(n){

	s1 = "pbox-";

	proj1Name = "GAiNing some knowledge with GAN's";
	proj2Name = "How much would I buy this painting for?";
	proj3Name = "Let's segment and classify!";
	proj4Name = "IOT based intelligent wearable device";
	proj5Name = "The getting-to-know-the-subject-better starter pack!";
	proj6Name = "Let's make a website about myself! Nothing narcissistic about that.";

	proj1Cat = "Deep Learning";
	proj2Cat = "Deep Learning";
	proj3Cat = "Image Processing";
	proj4Cat = "Must check this one out!";
	proj5Cat = "Deep Learning";
	proj6Cat = "Web Development";

	selectedProjName = "";
	selectedProjCat = "";

	if(n==1){
		selectedProjName = proj1Name;
		selectedProjCat = proj1Cat;
	}
	else if(n==2){
		selectedProjName = proj2Name;
		selectedProjCat = proj2Cat;
	}
	else if(n==3){
		selectedProjName = proj3Name;
		selectedProjCat = proj3Cat;
	}
	else if(n==4){
		selectedProjName = proj4Name;
		selectedProjCat = proj4Cat;
	}
	else if(n==5){
		selectedProjName = proj5Name;
		selectedProjCat = proj5Cat;
	}
	else if(n==6){
		selectedProjName = proj6Name;
		selectedProjCat = proj6Cat;
	}
	else{

	}

	document.getElementById(s1.concat(n)).innerHTML = "<div class=\"project-category text-faded\">" + selectedProjCat + "</div><div class=\"project-name\">" + selectedProjName + "</div>";

}
