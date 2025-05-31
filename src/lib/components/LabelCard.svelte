<script>
    let { label } = $props();
</script>

<div class="entity-card">
    <div class="square-container"><img class="img-fluid" src={label.logo} alt="" /></div>
    <div class="details">
        <div class="title">
            <a class="custom-link" href={"/labels/" + label._id}><h4>{label.name}</h4></a>
        </div>
    </div>
</div>


