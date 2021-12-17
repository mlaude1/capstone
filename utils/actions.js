import ices from './data.json'
import { connect } from './connection'

// function to get all ice cream
export const getIces = async () => {
  try {
    const { conn, Ice } = await connect()
    return await Ice.find({})
  } catch (error) {
    return { error: "Error in getIces function"}
  }
}

// function to get a single ice cream
export const getIce = async (id) => {
  try {
    const { conn, Ice } = await connect()
    return await Ice.findById(id)
  } catch (error) {
    return { error: "Error in getIce function" }
  }
}

// function to create a new ice cream
export const createIce = async (newIce) => {
  try {
    const { conn, Ice } = await connect()
    return await Ice.create(newIce)
  } catch (error) {
    return { error: "Error in createIce function"}
  }
}

// function to update an ice cream
export const updateIce = async (updatedIce, id) => {
  try {
    const { conn, Ice } = await connect()
    return await Ice.findByIdAndUpdate(id, updatedIce, { new: true})
  } catch (error) {
    return { error: "Error in updateIce function" }
  }
}

// function to delete an ice cream
export const destroyIce = async (id) => {
  try {
    const { conn, Ice } = await connect()
    return await Ice.findByIdAndDelete(id)
  } catch (error) {
    return { error: "Error in destroyIce function"}
  }
}