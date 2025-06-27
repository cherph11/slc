<script lang="ts">
      import { T, useTask  } from '@threlte/core'
      import { interactivity } from '@threlte/extras'
  interactivity()

      
  let rotation = 0
  useTask((delta) => {
    rotation += delta
  })
</script>


<T.Mesh 
  rotation.y={rotation}

>
    <T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  oncreate={(ref) => {
    ref.lookAt(0, 1, 0)
  }}
/>


  <T.BoxGeometry />
  <T.MeshBasicMaterial />
</T.Mesh>