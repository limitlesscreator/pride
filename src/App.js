import './App.css';
import {Main} from "./components/Main/Main";
import {ScanDocOne} from "./components/ScanDocOne/ScanDocOne";
import fullPricePdf from '../src/img/fullPrice.pdf'
import injener from '../src/img/injener.pdf'
import copyDocuments from '../src/img/copyDocuments.pdf'
import scanDocuments from '../src/img/scanDocuments.pdf'
import {ElectroArchiveSeven} from "./components/ElectroArchiveSeven/ElectroArchiveSeven";
function App() {

  const onButtonClick = (image,name) => {
    const pdfUrl = image;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${name}.pdf`; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    {/*<ScanDocOne/>*/}
    <ElectroArchiveSeven/>
    {/*<Main/>*/}
  </>
  );
}

export default App;
