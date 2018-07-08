import { createElement, ScriptableScene } from "metaverse-api";

export default class HouseScene extends ScriptableScene {

  async render() {
    return (
      <scene>
          <gltf-model position={{x:10, y:0, z:10}} scale={0.42} src="models/Forest.gltf" id="Forest"></gltf-model>
      </scene>
    );
  }
}
