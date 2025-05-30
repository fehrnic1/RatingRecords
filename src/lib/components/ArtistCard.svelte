<script>
    let { artist } = $props();
</script>

<div class="record-card">
    <div class="square-container"><img class="img-fluid" src={artist.logo} alt="" /></div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/artists/" + artist._id}>{artist.name}</a>
        </div>
    </div>
</div>





<style>
    .record-card {
        border: 1px solid #555;
        height: 100%;
        background-color: #444;
        color: white;
    }
    .details {
        padding: 0.5em;
    }
    .title {
        font-weight: bold;
    }
</style>
