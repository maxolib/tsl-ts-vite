import './style.css'
import * as THREE from 'three/webgpu'
import { color, texture, convertColorSpace } from 'three/tsl'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10
)
camera.position.z = 1

const renderer = new THREE.WebGPURenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.setAnimationLoop(animate)

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const material = new THREE.NodeMaterial()
// material.fragmentNode = color('blue')
const tex = new THREE.TextureLoader().load('/grid_uv.jpg',)
material.fragmentNode = convertColorSpace(texture(tex), THREE.SRGBColorSpace, THREE.LinearSRGBColorSpace)

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
scene.add(mesh)

renderer.debug.getShaderAsync(scene, camera, mesh).then((e) => {
  // console.log(e.vertexShader)
  console.log(e.fragmentShader)
})

function animate() {
  controls.update()

  renderer.render(scene, camera)
}