@extends('dashboard')
@push('stylesheets')
    <!-- DataTables -->
    <link href={{ asset('assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css') }} rel="stylesheet"
        type="text/css" />
    <link href={{ asset('assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css') }} rel="stylesheet"
        type="text/css" />
    <style>
        .actions {
            display: flex;
            justify-content: start;
            margin-bottom: 1em;
        }

        .hidden {
            display: none;
        }

        div.dt-buttons {
            width: fit-content;
            position: relative;
            top: 2em;
        }

        div.dt-search input:focus {
            box-shadow: unset;
        }

        div.dt-paging {
            display: flex;
            justify-content: flex-end;
            position: relative;
            bottom: 2em;
        }

        div.dt-paging .page-link:focus {
            box-shadow: unset;
        }

        #country-stats {
            margin: 1em 0 !important;
        }
    </style>
@endpush
@section('main-content')
    <div class="col-sm-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0">Tracking Users</h4>
                        </div>
                    </div>
                </div>
                <div class="">
                    <table class="table" id="country-stats">
                        <thead>
                            <tr class="text-centre">
                                <th class="index-column">#</th>
                                <th>Country</th>
                                <th>Users</th>
                                <th>Average Time Spent</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div style="border-color: rgba(0, 0, 0, 0.2) !important;" class="my-5 border border-bottom-0 w-50 mx-auto">
                </div>
                <div class="">
                    <table class="table" id="page-stats">
                        <thead>
                            <tr class="text-centre">
                                <th class="index-column">#</th>
                                <th>Page</th>
                                <th>Totale time spent</th>
                                <th>Average time spent</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <!-- Required datatable js -->
    <script src={{ asset('assets/libs/datatables.net/js/jquery.dataTables.min.js') }}></script>
    <script src={{ asset('assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js') }}></script>
    <!-- Buttons examples -->
    <script src={{ asset('assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js') }}></script>
    <script src={{ asset('assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js') }}></script>
    <script src={{ asset('assets/libs/jszip/jszip.min.js') }}></script>
    <script src={{ asset('assets/libs/pdfmake/build/pdfmake.min.js') }}></script>
    <script src={{ asset('assets/libs/pdfmake/build/vfs_fonts.js') }}></script>
    <script src={{ asset('assets/libs/datatables.net-buttons/js/buttons.html5.min.js') }}></script>
    <script src={{ asset('assets/libs/datatables.net-buttons/js/buttons.print.min.js') }}></script>
    <script src={{ asset('assets/libs/datatables.net-buttons/js/buttons.colVis.min.js') }}></script>
    <script>
        $(document).ready(function() {
            $('#country-stats').DataTable({
                processing: false,
                serverSide: true,
                ajax: "{{ route('country.stats') }}",
                columns: [{
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex',
                        orderable: false,
                        searchable: false,
                        className: 'text-center'
                    }, {
                        data: 'country',
                        name: 'country',
                    },
                    {
                        data: 'user_count',
                        name: 'user_count',
                        searchable: false
                    },
                    {
                        data: 'avg_time_spent',
                        name: 'avg_time_spent',
                        searchable: false
                    }
                ]
            });
            $('#page-stats').DataTable({
                processing: false,
                serverSide: true,
                ajax: "{{ route('page.stats') }}",
                columns: [{
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex',
                        orderable: false,
                        searchable: false,
                        className: 'text-center'
                    }, {
                        data: 'page_name',
                        name: 'page_name',
                    },
                    {
                        data: 'total_time_spent',
                        name: 'total_time_spent',
                        searchable: false
                    },
                    {
                        data: 'avg_time_spent',
                        name: 'avg_time_spent',
                        searchable: false

                    }
                ]
            });
        });
    </script>
@endpush
