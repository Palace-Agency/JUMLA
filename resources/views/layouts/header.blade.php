          @php
              $user = App\Models\User::all()->first();
          @endphp
          <header id="page-topbar" style="height: 95px;">
              <div class="navbar-header">
                  <div class="d-flex">
                      <!-- LOGO -->
                      <div class="navbar-brand-box">

                          <a href="{{ route('pages.dashboard') }}" class="logo logo-light">
                              <span class="logo-sm">
                                  <img src="{{ asset('storage/uploads/app/logo.png') }}" alt="" height="33">
                              </span>
                              <span class="logo-lg">
                                  <img src="{{ asset('storage/uploads/app/logo/png') }}" alt="" height="22">
                              </span>
                          </a>
                      </div>

                      <button type="button"
                          class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                          data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                          <i class="fa fa-fw fa-bars"></i>
                      </button>
                  </div>

                  <div class="d-flex">


                      <div class="dropdown d-none d-lg-inline-block ms-1">
                          <button type="button" class="btn header-item noti-icon waves-effect"
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="uil-apps"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                              <div class="px-lg-2">
                                  <div class="row g-0">
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/github.png" alt="Github">
                                              <span>GitHub</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/bitbucket.png" alt="bitbucket">
                                              <span>Bitbucket</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/dribbble.png" alt="dribbble">
                                              <span>Dribbble</span>
                                          </a>
                                      </div>
                                  </div>

                                  <div class="row g-0">
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/dropbox.png" alt="dropbox">
                                              <span>Dropbox</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp">
                                              <span>Mail Chimp</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" href="#">
                                              <img src="assets/images/brands/slack.png" alt="slack">
                                              <span>Slack</span>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="dropdown d-none d-lg-inline-block ms-1">
                          <button type="button" class="btn header-item noti-icon waves-effect"
                              data-bs-toggle="fullscreen">
                              <i class="uil-minus-path"></i>
                          </button>
                      </div>

                      {{-- <div class="dropdown d-inline-block">
                          <button type="button" class="btn header-item noti-icon waves-effect"
                              id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i class="uil-bell"></i>
                              <span class="badge bg-danger rounded-pill">3</span>
                          </button>
                          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                              aria-labelledby="page-header-notifications-dropdown">
                              <div class="p-3">
                                  <div class="row align-items-center">
                                      <div class="col">
                                          <h5 class="m-0 font-size-16"> Notifications </h5>
                                      </div>
                                      <div class="col-auto">
                                          <a href="javascript:void(0);" class="small"> Mark all as read</a>
                                      </div>
                                  </div>
                              </div>
                              <div data-simplebar style="max-height: 230px;">
                                  <a href="javascript:void(0);" class="text-dark notification-item">
                                      <div class="d-flex align-items-start">
                                          <div class="flex-shrink-0 me-3">
                                              <div class="avatar-xs">
                                                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                      <i class="uil-shopping-basket"></i>
                                                  </span>
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="mb-1">Your order is placed</h6>
                                              <div class="font-size-12 text-muted">
                                                  <p class="mb-1">If several languages coalesce the grammar</p>
                                                  <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 3 min ago
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                                  <a href="javascript:void(0);" class="text-dark notification-item">
                                      <div class="d-flex align-items-start">
                                          <div class="flex-shrink-0 me-3">
                                              <img src="assets/images/users/avatar-3.jpg"
                                                  class="rounded-circle avatar-xs" alt="user-pic">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="mb-1">James Lemire</h6>
                                              <div class="font-size-12 text-muted">
                                                  <p class="mb-1">It will seem like simplified English.</p>
                                                  <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 1 hours
                                                      ago</p>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                                  <a href="javascript:void(0);" class="text-dark notification-item">
                                      <div class="d-flex align-items-start">
                                          <div class="flex-shrink-0 me-3">
                                              <div class="avatar-xs">
                                                  <span class="avatar-title bg-success rounded-circle font-size-16">
                                                      <i class="uil-truck"></i>
                                                  </span>
                                              </div>
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="mb-1">Your item is shipped</h6>
                                              <div class="font-size-12 text-muted">
                                                  <p class="mb-1">If several languages coalesce the grammar</p>
                                                  <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 3 min ago
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </a>

                                  <a href="javascript:void(0);" class="text-dark notification-item">
                                      <div class="d-flex align-items-start">
                                          <div class="flex-shrink-0 me-3">
                                              <img src="assets/images/users/avatar-4.jpg"
                                                  class="rounded-circle avatar-xs" alt="user-pic">
                                          </div>
                                          <div class="flex-grow-1">
                                              <h6 class="mb-1">Salena Layfield</h6>
                                              <div class="font-size-12 text-muted">
                                                  <p class="mb-1">As a skeptical Cambridge friend of mine
                                                      occidental.</p>
                                                  <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 1 hours
                                                      ago</p>
                                              </div>
                                          </div>
                                      </div>
                                  </a>
                              </div>
                              <div class="p-2 border-top">
                                  <div class="d-grid">
                                      <a class="btn btn-sm btn-link font-size-14 text-center"
                                          href="javascript:void(0)">
                                          <i class="uil-arrow-circle-right me-1"></i> View More..
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div> --}}

                      <div class="dropdown d-inline-block">
                          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                              data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img class="rounded-circle header-profile-user"
                                  src="{{ asset('storage/uploads/user/' . $user->image) }}" alt="Header Avatar">
                              <span
                                  class="d-none d-xl-inline-block ms-1 fw-medium font-size-15">{{ $user->name }}</span>
                              <i class="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                          </button>
                          <div class="dropdown-menu dropdown-menu-end">
                              <!-- item-->
                              <a class="dropdown-item d-block" href="#"><i
                                      class="uil uil-cog font-size-18 align-middle me-1 text-muted"></i> <span
                                      class="align-middle">Settings</span> <span
                                      class="badge bg-success-subtle text-success rounded-pill mt-1 ms-2">03</span></a>
                              <a class="dropdown-item" href="#"><i
                                      class="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>
                                  <span class="align-middle">Sign out</span></a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="container-fluid">
                  <div class="topnav" style="margin-top:7px !important;">

                      <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                          <div class="collapse navbar-collapse" id="topnav-menu-content">
                              <ul class="navbar-nav">
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('pages.dashboard') }}">
                                          <i class="uil-home-alt me-2"></i>
                                          Dashboard
                                      </a>
                                  </li>

                                  <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages"
                                          role="button">
                                          <i class="uil-window me-2"></i>Pages<div class="arrow-down"></div>
                                      </a>

                                      <div class="dropdown-menu" aria-labelledby="topnav-pages">
                                          <div>
                                              <a class="dropdown-item" href="{{ route('pages.landing_page') }}"
                                                  class="dropdown-item">Landing
                                                  page</a>
                                              <a class="dropdown-item" href="{{ route('pages.service_page') }}"
                                                  class="dropdown-item">Services</a>
                                              <a class="dropdown-item" href="{{ route('pages.about_us_page') }}"
                                                  class="dropdown-item">About
                                                  us</a>
                                          </div>
                                      </div>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('blogs.index') }}">
                                          <i class="uil-blogger-alt me-2"></i>
                                          Blogs
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('contacts.index') }}">
                                          <i class="uil-comment-lines  me-2"></i>
                                          Contact us
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('tracking.index') }}">
                                          <i class="uil-chart me-2"></i>
                                          Tracking
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('pixels.index') }}">
                                          <i class="uil-globe me-2"></i>
                                          Pixels
                                      </a>
                                  </li>
                                  <li class="nav-item">
                                      <a class="nav-link" href="{{ route('settings.index') }}">
                                          <i class="uil-wrench  me-2"></i>
                                          System Setting
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                  </div>
              </div>
          </header>
