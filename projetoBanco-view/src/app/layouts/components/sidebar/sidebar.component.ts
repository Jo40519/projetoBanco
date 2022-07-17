import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterContentChecked {
  href: any;

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(() => {
      $('[data-widget="treeview"]').Treeview('init');
    });
  }

  ngAfterContentChecked() {
    // this.activeSideBar();
  }

  // activeSideBar() {
  //   const baseUrl = window.location.origin;
  //   const url = window.location.href.replace(baseUrl, '');
  //   $('ul.nav-sidebar a').filter(() => {
  //     return this.href.replace(baseUrl, '') !== url;
  //   }).removeClass('active');

  //   // for treeview
  //   $('ul.nav-treeview a').filter(() => {
  //     return this.href.replace(baseUrl, '') !== url;
  //   }).parentsUntil('.nav-sidebar > .nav-treeview')
  //     .removeClass('menu-open')
  //     .prev('a')
  //     .removeClass('active');

  //   $('ul.nav-sidebar a').filter(() => {
  //     return this.href.replace(baseUrl, '') === url;
  //   }).addClass('active');

  //   // for treeview
  //   $('ul.nav-treeview a').filter(() => {
  //     return this.href.replace(baseUrl, '') === url;
  //   }).parentsUntil('.nav-sidebar > .nav-treeview')
  //     .addClass('menu-open')
  //     .prev('a')
  //     .addClass('active');
  // }
}
