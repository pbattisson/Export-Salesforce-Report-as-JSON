public with sharing class ExportReportToJSONController {

    @AuraEnabled(cacheable = true)
    public static List<Report> getReportOptions(){
        return [SELECT Id, Name FROM Report];
    }

    @AuraEnabled(cacheable = true)
    public static string getReportAsJSON(Id reportId){
        Reports.ReportResults results = Reports.ReportManager.runReport(reportId, true);
        return JSON.serializePretty(results);
    }
}