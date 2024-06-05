import './App.css';
import {Main} from "./components/Main/Main";
import {ScanDocOne} from "./components/ScanDocOne/ScanDocOne";
import fullPricePdf from '../src/img/fullPrice.pdf'
import injener from '../src/img/injener.pdf'
import copyDocuments from '../src/img/copyDocuments.pdf'
import scanDocuments from '../src/img/scanDocuments.pdf'
import {ElectroArchiveSeven} from "./components/ElectroArchiveSeven/ElectroArchiveSeven";
import {FourPerevozka} from "./components/FourPerevozka/FourPerevozka";
import {TenDepozitSave} from "./components/TenDepozitSave/TenDepozitSave";
import {Nine} from "./components/Nine/Nine";
import {Eleven} from "./components/Eleven/Eleven";
import {Twelve} from "./components/Twelve/Twelve";
import {Fourteen} from "./components/Fourteen/Fourteen";
import {Thirteen} from "./components/ThirteenMain/Thirteen";
import {Fifteen} from "./components/Fifteen/Fifteen";
import {Eight} from "./components/Eight/Eight";
import {Six} from "./components/Six/Six";
import { Three} from "./components/Three/Three";
import {Five} from "./components/Five/Five";
import {Two} from "./components/Two/Two";
import {ComplexUslug} from "./components/ComplexUslug/ComplexUslug";
import {Link, Route, Routes} from "react-router-dom";
import ScrollToAnchor from "./components/AnchorComponent";
import React from "react";
import {Calculator} from "./components/Calculator/Calculator";
function App() {


  return (


  <>
    {/*<button style={{position: "absolute", top: 0, right:0,}} onClick={() => {onButtonClick(fullPricePdf, 'Полный прайс')}}>*/}
    {/*  download full price*/}
    {/*</button>*/}
    {/*<button style={{position: "absolute", top: '30px', right:0,}} onClick={() => {onButtonClick(injener, 'Инженерная печать')}}>*/}
    {/*  Инженерная печать*/}
    {/*</button>*/}
    {/*<button style={{position: "absolute", top: '60px', right:0,}} onClick={() => {onButtonClick(copyDocuments, 'copy documents')}}>*/}
    {/*  copy Documents*/}
    {/*</button>*/}
    {/*<button style={{position: "absolute", top: '90px', right:0,}} onClick={() => {onButtonClick(scanDocuments, 'scan documents')}}>*/}
    {/*  scan documents*/}
    {/*</button>*/}
  </>
  );
}

export default App;
