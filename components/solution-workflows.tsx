"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SolutionWorkflowsProps {
  solution: any
  categoryColor: string
  categoryTextColor: string
}

export default function SolutionWorkflows({ solution, categoryColor, categoryTextColor }: SolutionWorkflowsProps) {
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  // Find workflows that include this solution
  const relatedWorkflows = solution.workflows || []

  if (relatedWorkflows.length === 0) {
    return null
  }

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Workflow className="h-5 w-5" />
          Solution Workflows
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">This solution is part of the following workflows:</p>

        <div className="space-y-3">
          {relatedWorkflows.map((workflow: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <div
                className={`p-3 rounded-lg border ${
                  activeWorkflow === i
                    ? `border-${categoryTextColor.split("-")[1]}-200 dark:border-${
                        categoryTextColor.split("-")[1]
                      }-900 bg-${categoryTextColor.split("-")[1]}-50 dark:bg-${categoryTextColor.split("-")[1]}-950/20`
                    : "border-gray-200 dark:border-gray-800"
                } cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors`}
                onClick={() => setActiveWorkflow(i)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{workflow.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{workflow.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 ${activeWorkflow === i ? categoryTextColor : "text-gray-400"}`} />
                </div>

                {activeWorkflow === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800"
                  >
                    <div className="space-y-2">
                      {workflow.steps.map((step: any, j: number) => (
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className={`rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium ${
                              step.includes(solution.id)
                                ? `bg-gradient-to-r ${categoryColor} text-white`
                                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {j + 1}
                          </div>
                          <span
                            className={`text-sm ${
                              step.includes(solution.id) ? "font-medium" : "text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            {step.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Button variant="outline" asChild className="w-full mt-2">
          <Link href="/#ecosystem-map">
            View All Workflows
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
