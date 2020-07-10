import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ParserService } from 'src/app/services/ParserService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements OnInit {
    constructor(public parserService: ParserService) {

    }

    title = 'DrawUp';

    parserOutput: object | any[];
    dxfContent = new FormControl(INITIAL_VALUE);
    ngOnInit(): void {
        this.dxfContent.valueChanges.pipe(
            debounceTime(1000)
        )
        .subscribe(this.parseInput.bind(this));
        this.parseInput(this.dxfContent.value);
    }

    parseInput(input) {
        try{
            this.parserOutput = this.parserService.parseDxf(input);
        }catch(err){
            this.parserOutput = err;
        }
    }
}

const INITIAL_VALUE = `0
SECTION
2
ENTITIES
0
ELLIPSE
5
37c
330
1F
100
AcDbEntity
8
0
6
ByLayer
100
AcDbEllipse
10
10.000000
20
10.000000
30
0.000000
11
10.000000
21
11.000000
31
0.000000
40
1.986299
41
0.000000
42
6.283185
0
ELLIPSE
5
37d
330
1F
100
AcDbEntity
8
0
6
ByLayer
100
AcDbEllipse
10
0.000000
20
-5.000000
30
0.000000
11
0.000000
21
5.000000
31
0.000000
40
4.000000
41
0.000000
42
6.283185
0
ENDSEC
0
EOF`
