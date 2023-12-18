var sectionCount = [];
    for (let i = 0; i < document.getElementsByTagName("section").length; i++){
        sectionCount[i] = document.getElementsByTagName("section")[i]
    }
var intervalSection = document.createElement('script');
intervalSection.type = 'text/javascript';
intervalSection.text ='console.log(sectionCount[1]); setInterval(() => {\nif( "-" + sectionCount[0].clientHeight > sectionCount[0].getBoundingClientRect().y){\n';
    for (let i = 1, x = 0; i < sectionCount.length; i++) {
        intervalSection.text = intervalSection.text + '\nif("-" + sectionCount['+ i +'].clientHeight < sectionCount['+ i +'].getBoundingClientRect().y && "-" + sectionCount['+ x +'].clientHeight > sectionCount['+ x +'].getBoundingClientRect().y) \n{\n\tbackColorHeader(sectionCount['+ x +']);\n}';
        x++;
    }
intervalSection.text = intervalSection.text + '\n}else{document.getElementsByTagName("header")[0].style.background = "transparent";}}, 100);';
document.getElementsByTagName('body')[0].appendChild(intervalSection);


function backColorHeader(element){
    var color = window.getComputedStyle(element).backgroundColor;
    element.innerHtml = element.innerHtml + color + ';';
    document.getElementsByTagName("header")[0].style.background = color;
}