import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ComplexUslug} from "./components/ComplexUslug/ComplexUslug";
import {ScanDocOne} from "./components/ScanDocOne/ScanDocOne";
import {Fifteen} from "./components/Fifteen/Fifteen";
import fullPricePdf from '../src/img/fullPrice.pdf'
import injener from '../src/img/injener.pdf'
import copyDocuments from '../src/img/copyDocuments.pdf'
import scanDocuments from '../src/img/scanDocuments.pdf'
import {Fourteen} from "./components/Fourteen/Fourteen";
import {Main} from "./components/Main/Main";
import {Thirteen} from "./components/ThirteenMain/Thirteen";
import {Twelve} from "./components/Twelve/Twelve";
import {Eleven} from "./components/Eleven/Eleven";
import {TenDepozitSave} from "./components/TenDepozitSave/TenDepozitSave";
import {Nine} from "./components/Nine/Nine";
import {Eight} from "./components/Eight/Eight";
import {ElectroArchiveSeven} from "./components/ElectroArchiveSeven/ElectroArchiveSeven";
import {Six} from "./components/Six/Six";
import {Five} from "./components/Five/Five";
import {FourPerevozka} from "./components/FourPerevozka/FourPerevozka";
import {Three} from "./components/Three/Three";
import {Two} from "./components/Two/Two";
 export const onButtonClick = (image,name) => {
    const pdfUrl = image;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${name}.pdf`; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};



const router = createBrowserRouter([{
    path: '/',
    element:  <Main />
},
{
    path: 'scan-documents',
    element:  <ScanDocOne />
},
{
    path: 'engineering-print',
    element:  <Fifteen />
},
{
    path: 'print-processing',
    element:  <Fourteen />
},
{
    path: 'copy-documents',
    element:  <Thirteen />
},
{
    path: 'state-archives',
    element:  <Twelve />
},
{
    path: 'consulting-services',
    element:  <Eleven />
},
{
    path: 'depositary-custody',
    element:  <TenDepozitSave/>
},
{
    path: 'document-destruction',
    element:  <Nine/>
},
{
    path: 'document-indexing',
    element:  <Eight/>
},
{
    path: 'electronic-archive',
    element:  <ElectroArchiveSeven/>
},
{
    path: 'non-contact-scanning',
    element:  <Six/>
},
{
    path: 'scanning-books',
    element:  <Five/>
},
{
    path: 'archive-transportation',
    element:  <FourPerevozka/>
},
{
    path: 'wide-format-scanning',
    element:  <Two/>
},
{
    path: 'range-services',
    element:  <ComplexUslug/>
},
{
    path: 'reconciliation-stocktaking',
    element:  <Three/>
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
