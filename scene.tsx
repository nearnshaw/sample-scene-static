import { createElement, ScriptableScene } from "metaverse-api";

export default class HouseScene extends ScriptableScene {

  async render() {
    return (
      <scene>
          <gltf-model position={{x:10, y:0, z:10}} rotation={{x:0, y:0, z:0}} scale={0.42} src="models/Forest/Forest_20x20.gltf" id="Forest"></gltf-model>
      </scene>
    );
  }
}
