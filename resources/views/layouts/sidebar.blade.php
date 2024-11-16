            <div class="vertical-menu">

                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="20">
                        </span>
                    </a>

                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="20">
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <div data-simplebar class="sidebar-menu-scroll">

                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">

                            <li>
                                <a href="{{ route('pages.dashboard') }}">
                                    <i class="uil-home-alt"></i>
                                    {{-- <span class="badge rounded-pill bg-primary float-end">01</span> --}}
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            <li class="menu-title">Pages</li>
                            <li>
                                <a href="{{ route('pages.landing_page') }}" class="waves-effect">
                                    <i class="uil-calender"></i>
                                    <span>Landing page</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('pages.service_page') }}" class="waves-effect">
                                    <i class="uil-calender"></i>
                                    <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('pages.about_us_page') }}" class="waves-effect">
                                    <i class="uil-calender"></i>
                                    <span>About us</span>
                                </a>
                            </li>

                            {{-- <li>
                                <a href="javascript: void(0);" class="has-arrow waves-effect">
                                    <i class="uil-store"></i>
                                    <span>Landing page</span>
                                </a>
                                <ul class="sub-menu" aria-expanded="false">
                                    <li><a href="{{ route('pages.landing_page') }}">Products</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Product Detail</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Orders</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Customers</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Cart</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Checkout</a></li>
                                    <li><a href="{{ route('pages.landing_page') }}">Shops</a></li>
                                    <li><a href="ecommerce-add-product.html">Add Product</a></li>
                                </ul>
                            </li> --}}

                        </ul>
                    </div>
                    <!-- Sidebar -->
                </div>
            </div>
