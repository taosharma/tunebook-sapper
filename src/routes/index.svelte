<script>
  import {overrideItemIdKeyNameBeforeInitialisingDndZones} from "svelte-dnd-action";
  overrideItemIdKeyNameBeforeInitialisingDndZones("orderId");
  
  import TuneList from "../components/TuneList.svelte"
</script>

<section>
<TuneList/>
</section>

