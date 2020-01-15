import React, {Component} from 'react';
import './styles/resume.scss';
import file from './assets/Resume.pdf';
import { Document, Page,pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}
          >
          <Page className="resume-doc" pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Resume;
