          @php
              $user = App\Models\User::all()->first();
              $system = App\Models\SystemSetting::first();
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
                                          <a class="dropdown-icon-item" target="_blank"
                                              href="{{ $system->facebook_url }}">
                                              <img src="assets/images/brands/facebook.png" alt="Github">
                                              <span>Facebook</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" target="_blank"
                                              href="{{ $system->instagram_url }}">
                                              <img src="assets/images/brands/instagram.png" alt="bitbucket">
                                              <span>Instagram</span>
                                          </a>
                                      </div>
                                      <div class="col">
                                          <a class="dropdown-icon-item" target="_blank"
                                              href="{{ $system->tiktok_url }}">
                                              <img src="assets/images/brands/tiktok.png" alt="dribbble">
                                              <span>Tiktok</span>
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



                      <div class="dropdown mt-3">
                          <a href="/" class="btn btn-primary">back to landing page</a>
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
