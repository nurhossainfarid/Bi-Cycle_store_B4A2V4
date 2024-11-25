import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderServices.createOrderIntoDB(orderData);

        res.status(200).json({
          message: 'Order created successfully',
          status: true,
          data: result,
        })
    } catch (error: any) {
        if (error) {
          res.status(500).json({
            message: error.message || 'Something went wrong',
            success: false,
            error: error,
            stack: error.stack,
          })
        }
    }
}

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.calculateTotalRevenueFromDB();
    console.log(result);

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: result,
    })
  } catch (error: any) {
    if (error) {
      res.status(500).json({
        message: error.message || 'Something went wrong',
        success: false,
        error: error,
        stack: error.stack,
      })
    }
}
}

export const OrderController = {
    createOrder,
    calculateTotalRevenue
}