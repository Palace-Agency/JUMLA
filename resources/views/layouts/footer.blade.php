@php
    $setting = \App\Models\SystemSetting::first();
@endphp
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <script>
                    document.write(new Date().getFullYear())
                </script> © {{ $setting->website_name }}.
            </div>
        </div>
    </div>
</footer>
