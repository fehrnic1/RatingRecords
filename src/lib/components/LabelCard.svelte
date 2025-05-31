<script>
    let { label } = $props();
</script>

<div class="entity-card">
    <div class="square-container">
        <a class="custom-link" href={"/labels/" + label._id}>
            <img class="img-fluid" src={label.logo} alt="" />
        </a>
    </div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/labels/" + label._id}>{label.name}</a
            >
        </div>
    </div>
</div>
