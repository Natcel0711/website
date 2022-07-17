<script>
    import {ModalInfo} from "../stores/ModalStore";
    export let cardInfo
</script>
<a href="#" on:click={() => {ModalInfo(cardInfo.Name, cardInfo.Description)}} class="group">
    <div class="w-full mt-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <img src={cardInfo.Image} alt={cardInfo.Name} class="w-full h-full object-center object-cover group-hover:opacity-75">
    </div>
    <h3 class="mt-4 text-2xl text-gray-700">{cardInfo.Name}</h3>
  </a>