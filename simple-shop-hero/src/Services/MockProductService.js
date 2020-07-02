export class MockProductService {

  getAllProducts() {
    const sampleProjects = [
      {
        id: 1,
        title: 'Product 1',
        relatedResources: [
          {
            url: "/",
            title: "Related resource 1-1",
            img: '/sample.jpg',
          }
        ]
      },
      {
        id: 2,
        title: 'Product 2',
        relatedResources: [
          {
            id: 1,
            url: "/",
            title: "Related resource 2-1",
            img: '/sample.jpg',
          },
          {
            id: 2,
            url: "/",
            title: "Related resource 2-2",
            img: '/sample.jpg',
          }
        ]
      }
    ];

    return Promise.resolve(sampleProjects);
  }
}