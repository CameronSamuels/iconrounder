function q(e){return document.querySelector(e)}function l(e){i.onload=function(){var e=Math.min(i.width,i.height);b.width=e,b.height=e,c.drawImage(s,0,0,e,e),c.globalCompositeOperation="source-atop",c.drawImage(i,-(i.width-e)/2,-(i.height-e)/2),q("a").href=b.toDataURL()},i.src=e.target.result}var s=new Image,i=new Image,b=q("canvas"),c=b.getContext("2d");s.src="a/s.svg",q("input").onchange=function(){if(this.files){var e=new FileReader;e.onload=l,e.readAsDataURL(this.files[0])}}