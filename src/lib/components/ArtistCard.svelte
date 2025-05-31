<script>
    let { artist } = $props();
</script>

<div class="entity-card">
    <div class="square-container"><img class="img-fluid" src={artist.logo} alt="" /></div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/artists/" + artist._id}>{artist.name}</a>
        </div>
    </div>
</div>




