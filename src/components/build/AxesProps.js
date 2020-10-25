const axisRotations = {
  x: [0, 0, Math.PI / 2],
  y: [0, 0, 0],
  z: [Math.PI / 2, 0, 0],
  xy: [0, 0, Math.PI / 4],
  nxy: [0, 0, -Math.PI / 4],
  xz: [0, Math.PI / 4, Math.PI / 2],
  nxz: [0, -Math.PI / 4, Math.PI / 2],
  yz: [Math.PI / 4, 0, 0],
  nyz: [-Math.PI / 4, 0, 0],
  nnn_ppp: [0, -Math.PI / 3.95, -Math.PI / 3.29],
  nnp_ppn: [0, Math.PI / 3.95, -Math.PI / 3.29],
  npn_pnp: [0, -Math.PI / 3.95, Math.PI / 3.29],
  npp_pnn: [0, Math.PI / 3.95, Math.PI / 3.29],
  a1: [0, 0, 0],
  a12: [0, 0, Math.PI / 6],
  a2: [0, 0, Math.PI / 3],
  a23: [0, 0, Math.PI / 2],
  a3: [0, 0, (2 * Math.PI) / 3],
  a13: [0, 0, (5 * Math.PI) / 6],
};

const planeRotations = {
  two: [0, 0, 0],
  four: [0, Math.PI / 2, 0],
  fourdu: [0, Math.PI / 4, 0],
  fourdd: [0, -Math.PI / 4, 0],
  three: [0, Math.PI / 3, 0],
};

const axisProps = {
  odd: {
    a1: {
      rotationSym: 2,
      axisRotation: axisRotations.a1,
      rotationColor: "black",
      planeColor: "black",
      axisColor: "gray",
      planes: [planeRotations.four],
    },
    a2: {
      rotationSym: 2,
      axisRotation: axisRotations.a2,
      rotationColor: "blue",
      planeColor: "blue",
      axisColor: "gray",
      planes: [planeRotations.four],
    },
    a3: {
      rotationSym: 2,
      axisRotation: axisRotations.a3,
      rotationColor: "green",
      planeColor: "green",
      axisColor: "gray",
      planes: [planeRotations.four],
    },
    z: {
      rotationSym: 6,
      axisRotation: axisRotations.z,
      rotationColor: "purple",
      planeColor: "purple",
      axisColor: "gray",
      planes: [planeRotations.four],
    },
  },
  even: {
    x: {
      rotationSym: 4,
      axisRotation: axisRotations.x,
      rotationColor: "black",
      planeColor: "silver",
      axisColor: "gray",
      planes: [
        planeRotations.four,
        planeRotations.fourdu,
        planeRotations.fourdd,
      ],
      hasPlane: true,
    },
    y: {
      rotationSym: 4,
      axisRotation: axisRotations.y,
      rotationColor: "black",
      planeColor: "silver",
      axisColor: "gray",
      planes: [
        planeRotations.two,
        planeRotations.four,
        planeRotations.fourdu,
        planeRotations.fourdd,
      ],
      hasPlane: true,
    },
    z: {
      rotationSym: 4,
      axisRotation: axisRotations.z,
      rotationColor: "black",
      planeColor: "silver",
      axisColor: "gray",
      planes: [
        // planeRotations.four,
        planeRotations.fourdu,
        planeRotations.fourdd,
      ],
      hasPlane: true,
    },
    nnn_ppp: {
      rotationSym: 3,
      axisRotation: axisRotations.nnn_ppp,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.three],
      hasPlane: false,
    },
    nnp_ppn: {
      rotationSym: 3,
      axisRotation: axisRotations.nnp_ppn,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.three],
      hasPlane: false,
    },
    npn_pnp: {
      rotationSym: 3,
      axisRotation: axisRotations.npn_pnp,
      rotationColor: "black",
      planeColor: "grey",
      axisColor: "gray",
      planes: [planeRotations.three],
      hasPlane: false,
    },
    npp_pnn: {
      rotationSym: 3,
      axisRotation: axisRotations.npp_pnn,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.three],
      hasPlane: false,
    },
    xy: {
      rotationSym: 2,
      axisRotation: axisRotations.xy,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
    nxy: {
      rotationSym: 2,
      axisRotation: axisRotations.nxy,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
    xz: {
      rotationSym: 2,
      axisRotation: axisRotations.xz,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
    nxz: {
      rotationSym: 2,
      axisRotation: axisRotations.nxz,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
    yz: {
      rotationSym: 2,
      axisRotation: axisRotations.yz,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
    nyz: {
      rotationSym: 2,
      axisRotation: axisRotations.nyz,
      rotationColor: "black",
      planeColor: "gray",
      axisColor: "gray",
      planes: [planeRotations.two],
      hasPlane: false,
    },
  },
};

export default axisProps;