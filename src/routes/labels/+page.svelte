<script>
  import LabelCard from "$lib/components/LabelCard.svelte";
  let { data } = $props();
  let labels = data.labels;
</script>






<div class="container topBar">
  <div class="row">
    <div class="col">
      <h1>LABELS</h1>
    </div>
    <div class="col addButton">
      <a class="btn btn-primary" role="button" href="/labels/create">Add a Label</a>
    </div>
  </div>
</div>


<div class="container categoryCard">
  <div class="row">
    {#each labels as label}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <LabelCard {label}></LabelCard>
      </div>
    {/each}
  </div>
</div>
