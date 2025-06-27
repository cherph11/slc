<script lang="ts">
    import Counter from "../components/Counter.svelte";
    import { EarthIcon, Recycle, HeartHandshake } from "@lucide/svelte"; 
</script>
<div class="bg-gradient-to-b from-[#FFC107] to-[#347433] min-h-fit h-[80vh]">

    <div class="w-screen  text-center mt-10 grid place-items-center mb-0 pb-0 gap-9">
        
        <Counter/>
<a href="/contribute" class="btn btn-xl p-[3px] relative">
  <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-600 rounded-lg" />
  <div class="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent motion-scale-in-[0.31] motion-translate-x-in-[-2%] motion-translate-y-in-[4%] motion-opacity-in-[77.59991455078125%] motion-blur-in-[17px]">
    Contribute!
  </div>
</a>
    </div>

    <div class="flex mt-12 pt-0 overflow-hidden min-h-fit sm:flex-row w-screen justify-evenly bg-transparent content-between gap-12 items-center flex-col p-7 


">
        <div class="card pl-3 pt-0 flex-1 bg-base-100 shadow-2xs border-2   border-amber-200  sm:max-w-[29%] motion-translate-x-in-[-37%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[30px]

">
            <figure  class="mt-5">
                <Recycle size={44} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">The Problem</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quia? Voluptate minus laudantium beatae atque excepturi. Labore aliquam odit fuga quod, rerum distinctio minus culpa blanditiis provident rem repellat eligendi?.</p>
  </div>
</div>
 <div class="card motion-translate-x-in-[0%] motion-translate-y-in-[163%] motion-opacity-in-[0%] motion-blur-in-[30px] motion-delay-100


 pl-3 pt-0 bg-base-100 flex-1  border-amber-200 border-2  sm:max-w-[29%]">
  <figure  class="mt-5">
   <EarthIcon size={44} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">The Solution</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quia? Voluptate minus laudantium beatae atque excepturi. Labore aliquam odit fuga quod, rerum distinctio minus culpa blanditiis provident rem repellat eligendi?.</p>
  </div>
</div>
 <div class="card motion-translate-x-in-[67%] motion-translate-y-in-[1%] motion-opacity-in-[0%] motion-blur-in-[30px]
motion-delay-200  
  pl-3 pt-0 bg-base-100 flex-1  border-amber-200 border-2  sm:max-w-[29%]">
  <figure  class="mt-5">
    <HeartHandshake size={44} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">How You Can Help</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quia? Voluptate minus laudantium beatae atque excepturi. Labore aliquam odit fuga quod, rerum distinctio minus culpa blanditiis provident rem repellat eligendi?.</p>
  </div>
</div>

</div>
</div>