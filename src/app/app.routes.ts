import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent), title: "Home" },
    { path: 'about', loadComponent: () => import('./pages/about-us/about-us.component').then(c => c.AboutUsComponent), title: "AboutUs"  },
    { path: 'category', loadComponent: () => import('./pages/single-category/single-category.component').then(c => c.SingleCategoryComponent), title: "Category"  },
    { path: 'contact', loadComponent: () => import('./pages/contact-us/contact-us.component').then(c => c.ContactUsComponent) , title: "ContactUs" },
    { path: 'terms-conditions', loadComponent: () => import('./pages/terms-and-conditions/terms-and-conditions.component').then(c => c.TermsAndConditionsComponent), title: "TermsAndConditions"  },
    { path: '**', redirectTo: '/home' }
];
