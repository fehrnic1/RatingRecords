<script>
    let { artist } = $props();
</script>

<div class="entity-card">
    <div class="square-container">
        <a class="custom-link" href={"/artists/" + artist._id}>
            <img class="img-fluid" src={artist.logo} alt="" /></a
        >
    </div>

    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/artists/" + artist._id}
                >{artist.name}</a
            >
        </div>
    </div>
</div>
