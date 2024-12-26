import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { ScrollArea } from './ui/scroll-area'

export default function CustomizeDialog({ 
  item, 
  isOpen, 
  onClose, 
  onConfirm 
}) {
  const [selectedAddOns, setSelectedAddOns] = useState([])
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleConfirm = () => {
    onConfirm({
      ...item,
      addOns: selectedAddOns,
      options: selectedOptions
    })
    onClose()
  }

  const calculateTotal = () => {
    const addOnsTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = item.addOns?.find(a => a.id === id)
      return sum + (addOn?.price || 0)
    }, 0)
    
    const optionsTotal = Object.values(selectedOptions).reduce((sum, optionId) => {
      const option = item.customizationOptions?.find(group => 
        group.options.some(opt => opt.id === optionId)
      )?.options.find(opt => opt.id === optionId)
      return sum + (option?.additionalPrice || 0)
    }, 0)

    return item.price + addOnsTotal + optionsTotal
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Customize {item.name}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 py-4">
            {item.customizationOptions?.map((group) => (
              <div key={group.id} className="space-y-4">
                <h3 className="font-medium">{group.name}</h3>
                <RadioGroup
                  value={selectedOptions[group.id]}
                  onValueChange={(value) =>
                    setSelectedOptions(prev => ({
                      ...prev,
                      [group.id]: value
                    }))
                  }
                >
                  {group.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id}>
                        {option.name}
                        {option.additionalPrice > 0 && 
                          ` (+$${option.additionalPrice.toFixed(2)})`
                        }
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            {item.addOns && item.addOns.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-medium">Add-ons</h3>
                {item.addOns.map((addOn) => (
                  <div key={addOn.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={addOn.id}
                      checked={selectedAddOns.includes(addOn.id)}
                      onCheckedChange={(checked) => {
                        setSelectedAddOns(prev =>
                          checked
                            ? [...prev, addOn.id]
                            : prev.filter(id => id !== addOn.id)
                        )
                      }}
                    />
                    <Label htmlFor={addOn.id}>
                      {addOn.name} (+${addOn.price.toFixed(2)})
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
        <DialogFooter className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              Add to Cart
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

