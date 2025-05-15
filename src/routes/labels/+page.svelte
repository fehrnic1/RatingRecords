<script>
  import LabelCard from "$lib/components/LabelCard.svelte";
  let {data} = $props();
  let labels = data.labels;
  </script>
  
<a class="btn btn-primary" role="button" href="/labels/create">Add</a>

  <h1>Labels</h1>

  <div class="row">
    {#each labels as label}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <LabelCard label={label}></LabelCard>
      </div>
    {/each}
  </div>