@php
    $settings = App\Models\SystemSetting::find(1);
@endphp
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $settings->website_name }}</title>
    <link rel="shortcut icon"
        href={{ isset($settings) && $settings->favicon ? asset('storage/uploads/settings/' . $settings->favicon) : '' }}>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.css" />
    <link href={{ asset('assets/libs/sweetalert2/sweetalert2.min.css') }} rel="stylesheet" type="text/css" />
    <!-- bootstrap-touchspin -->
    <link href={{ asset('assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css') }} rel="stylesheet" />

    <!-- Bootstrap Css -->
    <link href={{ asset('assets/css/bootstrap.min.css') }} id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href={{ asset('assets/css/icons.min.css') }} rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href={{ asset('assets/css/app.min.css') }} id="app-style" rel="stylesheet" type="text/css" />
    @stack('stylesheets')
</head>

<body data-layout="horizontal" data-topbar="dark">

    <!-- Begin page -->
    <div id="layout-wrapper">


        @include('layouts.header')
        <!-- ========== Left Sidebar Start ========== -->
        {{-- @include('layouts.sidebar') --}}
        <!-- Left Sidebar End -->



        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    @yield('main-content')

                </div> <!-- container-fluid -->
            </div>
            <!-- End Page-content -->


            @include('layouts.footer')
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->



    <!-- Right bar overlay-->
    {{-- <div class="rightbar-overlay"></div> --}}
    <!-- JAVASCRIPT -->
    <script src={{ asset('assets/libs/jquery/jquery.min.js') }}></script>
    <script src={{ asset('assets/libs/bootstrap/js/bootstrap.bundle.min.js') }}></script>
    <script src={{ asset('assets/libs/metismenu/metisMenu.min.js') }}></script>
    <script src={{ asset('assets/libs/simplebar/simplebar.min.js') }}></script>
    <script src={{ asset('assets/libs/node-waves/waves.min.js') }}></script>
    <script src={{ asset('assets/libs/waypoints/lib/jquery.waypoints.min.js') }}></script>
    <script src={{ asset('assets/libs/jquery.counterup/jquery.counterup.min.js') }}></script>

    <!-- Bootrstrap touchspin -->
    <script src={{ asset('assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js') }}></script>
    <!-- Sweet Alerts js -->
    <script src="assets/libs/sweetalert2/sweetalert2.min.js"></script>
    <!-- Notify js -->
    <script src="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.min.js"></script>

    <!-- App js -->
    <script src={{ asset('assets/js/app.js') }}></script>
    @stack('scripts')

</body>

</html>
