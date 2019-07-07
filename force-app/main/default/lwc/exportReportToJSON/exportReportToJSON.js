import { LightningElement, track, wire } from 'lwc';
import getReportOptions from '@salesforce/apex/ExportReportToJSONController.getReportOptions';
import getReportAsJSON from '@salesforce/apex/ExportReportToJSONController.getReportAsJSON';

export default class ExportReportToJSON extends LightningElement {
    @track report;
    @track reports;
    @track reportData;
    @track err;

    @wire(getReportOptions)
    wiredReports({ error, data }) {
        if (data) {
            this.reports = data;
        } else if (error) {
            this.err = error;
        }
    }

    @wire(getReportAsJSON, {reportId: "$report"})
    wiredReportData({ error, data }) {
        if (data) {
            this.reportData = data;
        } else if (error) {
            this.err = error;
        }
    }
    

    selectReport(event) {
        this.report = event.target.value;
    }

}