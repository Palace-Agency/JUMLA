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

        #contacts-table {
            margin: 1em 0 !important;
        }
    </style>
@endpush
@section('main-content')
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h4>Categories List</h4>
            </div>
            <div class="card-body">
                <div class="actions">
                    <button id="toggleBulkDelete" class="btn btn-primary d-flex justify-start w-fit" type="button">
                        Select all
                    </button>
                    <div class="multiple-delete-container hidden">
                        <button id="deleteSelectedBtn" class="btn btn-danger d-flex justify-end w-fit" type="button"
                            style="padding: 5px; margin-left:7px">
                            <i data-feather="trash-2" style="width:20px"></i>
                        </button>
                    </div>
                </div>
                <div class="table-responsive theme-scrollbar">
                    <table class="table" id="contacts-table">
                        <thead>
                            <tr class="text-centre">
                                <th class="checkbox-column hidden"><input type="checkbox" id="main_checkbox"
                                        style="height: unset;"></th>
                                <th class="index-column">#</th>
                                <th style="width: 20%">Name</th>
                                <th style="width: 20%">Email</th>
                                <th style="width: 50%">Message</th>
                                <th style="width: 50%">Date</th>
                                {{-- <th>Action</th> --}}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
        {{-- @foreach ($categories as $category)
            @include('dashboards.admin.categories.edit', ['category' => $category])
        @endforeach
        @include('dashboards.admin.categories.create') --}}
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
            let table = $('#contacts-table').DataTable({
                processing: false,
                serverSide: true,
                ajax: "{{ route('contacts.index') }}",
                columnDefs: [{
                        targets: 0,
                        className: 'checkbox-column hidden'
                    },
                    {
                        targets: 1,
                        className: 'index-column'
                    }
                ],
                columns: [{
                        data: 'checkbox',
                        name: 'checkbox',
                        orderable: false,
                        searchable: false
                    },
                    {
                        data: 'DT_RowIndex',
                        name: 'DT_RowIndex'
                    },
                    {
                        data: 'name',
                        name: 'name'
                    },
                    {
                        data: 'email',
                        name: 'email'
                    },
                    {
                        data: 'message',
                        name: 'message'
                    },
                    {
                        data: 'created_at',
                        name: 'created_at'
                    },
                    // {
                    //     data: 'action',
                    //     name: 'action',
                    //     orderable: false,
                    //     searchable: false
                    // }
                ],
                createdRow: function(row, data, dataIndex) {
                    $(row).attr('key', data.id);
                },
                dom: 'Bfrtip',
                buttons: [{
                        extend: 'csvHtml5',
                        text: '<i class="fa fa-file-csv"></i> CSV',
                        className: 'btn btn-success',
                        titleAttr: 'Export as CSV',
                        exportOptions: {
                            columns: [0, 1, 2]
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        text: '<i class="fa fa-file-excel"></i> Excel',
                        className: 'btn btn-primary',
                        titleAttr: 'Export as Excel',
                        exportOptions: {
                            columns: [0, 1, 2]
                        }
                    },
                    {
                        extend: 'print',
                        text: '<i class="fa fa-print"></i> Print',
                        className: 'btn btn-info',
                        titleAttr: 'Print',
                        exportOptions: {
                            columns: [0, 1, 2]
                        }
                    }
                ],
                pageLength: 10,
                drawCallback: function(settings) {
                    if ($("#toggleBulkDelete").text() === "Cancel") {
                        $(".checkbox-column").removeClass("hidden");
                        $(".multiple-delete-container").removeClass("hidden");
                        $('#main_checkbox').prop('checked', false);
                    }
                }
            });

            $(".err").text("");
            $('.modal.fade').on('hidden.bs.modal', function() {
                $('.err').text('');
            });

            $(document).on('click', '.deleteCategory', function(e) {
                e.preventDefault();
                var categoryId = $(this).data('id');
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: '',
                            type: 'DELETE',
                            data: {
                                _token: '{{ csrf_token() }}'
                            },
                            success: function(response) {
                                if (response.success) {
                                    table.ajax.reload(null, false);
                                    new Notify({
                                        status: 'success',
                                        title: 'Success!',
                                        text: response.success,
                                        position: 'right bottom'
                                    });
                                }
                            },
                            error: function(xhr, status, error) {
                                console.error(xhr.responseText);
                            }
                        });
                    }
                });
            });

            // Bulk action delete
            $("#toggleBulkDelete").click(function() {
                $(".checkbox-column").toggleClass("hidden");
                $(".multiple-delete-container").toggleClass("hidden");
                let isHidden = $(".checkbox-column").hasClass("hidden");
                $(this).text(isHidden ? "Select All" : "Cancel");
            });


            $("#main_checkbox").change(function() {
                $(".checkbox-input").prop('checked', $(this).prop("checked"));
            });

            $("#deleteSelectedBtn").click(function() {
                var selectedIds = $(".checkbox-input:checked").map(function() {
                    return $(this).data('id');
                }).get();

                if (selectedIds.length > 0) {
                    Swal.fire({
                        title: `You are deleting ${selectedIds.length} ${selectedIds.length === 1 ? "category" : "categories"} ... Are you sure?`,
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            $.ajax({
                                url: "",
                                type: "POST",
                                data: {
                                    ids: selectedIds,
                                    _token: "{{ csrf_token() }}"
                                },
                                success: function(response) {
                                    table.ajax.reload(null, false);
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: `Your ${selectedIds.length} ${selectedIds.length === 1 ? "category" : "categories"}  has been deleted.`,
                                        icon: "success",
                                        showConfirmButton: false,
                                    })

                                },
                                error: function(xhr, status, error) {
                                    console.error(xhr.responseText);
                                }
                            });

                        }
                    });
                } else {
                    Swal.fire({
                        title: "No Categories selected",
                        text: "Please select Categories to delete.",
                        icon: "warning",
                        confirmButtonColor: "#3085d6",
                    });
                }
            });
        });
    </script>
@endpush
