import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Mock response for demonstration
    const recommendedCoffee = [
      { name: 'Colombian Roast', roastLevel: 'Medium', pricePerUnit: 15.00, image: '/product.jpg' },
      { name: 'Brazilian Blend', roastLevel: 'Dark', pricePerUnit: 18.00, image: '/product.jpg' }
    ];
    
    return NextResponse.json(recommendedCoffee);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch recommendations' }, { status: 500 });
  }
}
