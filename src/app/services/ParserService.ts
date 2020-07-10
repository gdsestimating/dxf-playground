import DxfParser from 'dxf-parser';
import { Injectable } from '@angular/core';

@Injectable()
export class ParserService {
    parser: any;
    
    constructor() {
        this.parser = new DxfParser();
    }

    parseDxf(content: string): object | any[] {
        return this.parser.parseSync(content);
    }
}