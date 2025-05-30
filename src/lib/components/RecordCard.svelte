<script>
    let { record } = $props();
</script>

<div class="entity-card">
    <div><img class="img-fluid" src={record.cover} alt="" /></div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/records/" + record._id}>{record.title}</a>
        </div>
        <div>by {record.artist}</div>
    </div>
</div>
