import { Routes } from "@angular/router";

export const vesselwiseSummaryRoutes : Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./pages/vesselwisesummary-report/vesselwisesummary-report.component')
                .then(v => v.VesselwisesummaryReportComponent)
    }
];
