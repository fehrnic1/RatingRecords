<script>
    let { data } = $props();
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href="/artists">Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{data.artist.name}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_artist.jpg" alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>Origin: {data.artist.originCity} ({data.artist.originCountry})</div>
            <div>Formed in: {data.artist.formedIn}</div>
        </div>
    </div>
</div>