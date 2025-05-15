<script>
    let { data } = $props();
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href="/labels">Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{data.label.name}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_artist.jpg" alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>Origin: {data.label.originCity} ({data.label.originCountry})</div>
            <div><a href={data.label.bandCampLink} target="_blank">Band Camp Link</a></div>

        </div>
    </div>
</div>