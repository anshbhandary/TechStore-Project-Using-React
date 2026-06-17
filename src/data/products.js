const products = [
    {
      id: 1,
      title: "iPhone 15 Pro",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      rating: 5,
      discountPrice: 999,
      actualPrice: 1199,
      bestSeller: true,
      brand: "Apple"
    },
    {
      id: 2,
      title: "Gaming Laptop",
      image:
        "https://images.unsplash.com/photo-1605134513573-384dcf99a44c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdhbWluZyUyMExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
      discountPrice: 1299,
      actualPrice: 1499,
      bestSeller: true,
      brand: "Asus"
    },
    {
      id: 3,
      title: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: 3.7,
      discountPrice: 199,
      actualPrice: 249,
      bestSeller: false,
      brand: "Apple"
    },
    {
      id: 4,
      title: "Smart Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4.8,
      discountPrice: 299,
      actualPrice: 399,
      bestSeller: true,
      brand: "Samsung"
    },
    {
      id: 5,
      title: "Play Station",
      image:
        "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheSUyMHN0YXRpb258ZW58MHx8MHx8fDA%3D",
      rating: 4.9,
      discountPrice: 399,
      actualPrice: 499,
      bestSeller: false,
      brand: "Sony"
    },
    {
      id: 6,
      title: "Sony Bravia",
      image:
        "https://plus.unsplash.com/premium_photo-1664392122271-a1aedb05a7c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHZ8ZW58MHx8MHx8fDA%3D",
      rating: 2.9,
      discountPrice: 199,
      actualPrice: 299,
      bestSeller: true,
      brand: "Sony"
    },
    {
      id: 7,
      title: "Samsung S25",
      image:
        "https://images.unsplash.com/photo-1709744722656-9b850470293f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMDIlNUNzMjV8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      discountPrice: 432,
      actualPrice: 578,
      bestSeller: true,
      brand: "Samsung"
    },
    {
      id: 8,
      title: "Samsung Watch 4",
      image:
        "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHdhdGNoNHxlbnwwfHwwfHx8MA%3D%3D",
      rating: 3.3,
      discountPrice: 99,
      actualPrice: 199,
      bestSeller: true,
      brand: "Samsung"
    },
    {
      id: 9,
      title: "Sony Bravia 65\"",
      image:
        "https://plus.unsplash.com/premium_photo-1664392122271-a1aedb05a7c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHZ8ZW58MHx8MHx8fDA%3D",
      rating: 4.3,
      discountPrice: 199,
      actualPrice: 299,
      bestSeller: true,
      brand: "Sony"
    },
    {
      id: 10,
      title: "ROG",
      image:
        "https://images.unsplash.com/photo-1678722262926-0e85e2f66963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXN1cyU1Q3xlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.9,
      discountPrice: 1199,
      actualPrice: 1299,
      bestSeller: true,
      brand: "Asus"
    },
    {
      id: 11,
      title: "Sony Camera",
      image:
        "https://images.unsplash.com/photo-1616088886430-ccd86fef0713?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4.3,
      discountPrice: 1399,
      actualPrice: 1499,
      bestSeller: true,
      brand: "Sony"
    },
    {
      id: 12,
      title: "Nothing Headphones",
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFycGhvbmVzfGVufDB8fDB8fHww",
      rating: 4.5,
      discountPrice: 99,
      actualPrice: 299,
      bestSeller: true,
      brand: "Nothing"
    },
    {
      id: 13,
      title: "Sony Speaker",
      image:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
      rating: 3.9,
      discountPrice: 299,
      actualPrice: 499,
      bestSeller: true,
      brand: "Sony"
    },
    {
      id: 14,
      title: "Deep Water Bottle",
      image:
        "https://images.unsplash.com/photo-1568395216634-ab1b1e848751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaCUyMGJvdHRsZXN8ZW58MHx8MHx8fDA%3D",
      rating: 4.6,
      discountPrice: 12,
      actualPrice: 16,
      bestSeller: true,
      brand: "Other"
    },
    {
      id: 15,
      title: "Tech Bag",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwYmFnfGVufDB8fDB8fHww",
      rating: 4.3,
      discountPrice: 59,
      actualPrice: 60,
      bestSeller: true,
      brand: "Other"
    }
  ];
  
  export default products;