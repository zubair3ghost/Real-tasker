import { Component, OnInit } from '@angular/core';
import { UtillService } from 'src/app/utility/utill.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
imagePath: any="../../../assets/building/rebuild.svg "
;
title = 'data'; // Corrected variable name and data structure

constructor(private utility: UtillService) {
  this.utility.setData({ title: this.title }); // Sending data as an object with title property
}

  ngOnInit(): void {
  }
  data:any[]=[
  
    { picone:"assets/building/warning.svg",
     pictwo:"assets/building/dustbeen.svg ",
     pic3:"assets/building/pen.svg ",
     pic4:"assets/building/people.svg ",
     pic:"assets/building/redbuild.svg ",
     pic6:"assets/building/girl.svg",
     pic7:"assets/building/girl202.svg ",
     pic8:"assets/building/girl+2.svg ",
     pic9:"assets/building/bluesvg.svg ",
     pic10:"assets/building/Group.svg ",
  
  },
  { picone:"assets/building/warning.svg",
  pictwo:"assets/building/dustbeen.svg ",
  pic3:"assets/building/pen.svg ",
  pic4:"assets/building/people.svg ",
  pic:"assets/building/white.svg ",
  pic6:"assets/building/girl.svg",
  pic7:"assets/building/girl202.svg ",
  pic8:"assets/building/girl+2.svg ",
  pic9:"assets/building/bluesvg.svg ",
  pic10:"assets/building/Group.svg ",

},
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/frontred.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/tall.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
  
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/redbuild.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/white.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/frontred.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
{ picone:"assets/building/warning.svg",
pictwo:"assets/building/dustbeen.svg ",
pic3:"assets/building/pen.svg ",
pic4:"assets/building/people.svg ",
pic:"assets/building/tall.svg ",
pic6:"assets/building/girl.svg",
pic7:"assets/building/girl202.svg ",
pic8:"assets/building/girl+2.svg ",
pic9:"assets/building/bluesvg.svg ",
pic10:"assets/building/Group.svg ",

},
 
 
  ]

}
 