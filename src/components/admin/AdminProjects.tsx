'use client'

import type React from 'react'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store/store'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { ImageIcon } from 'lucide-react'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

interface Project {
  _id: string
  title: string
  category: string
  location: string
  year: string
  imagePath: string
  description?: string
  client?: string
  area?: string
  engineeringChallenges: string
  technicalSolutions: string
  results: string
}

const AdminProjects = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    category: 'Commercial',
    location: '',
    year: new Date().getFullYear().toString(),
    description: '',
    client: '',
    area: '',
    engineeringChallenges: '',
    technicalSolutions: '',
    results: '',
    image: null as File | null
  })

  useEffect(() => {
    fetchProjects()
  }, [token])

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/projects', {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'image' && value) {
        formDataToSend.append(key, value as string)
      }
    })
    if (formData.image) {
      formDataToSend.append('image', formData.image)
    }

    try {
      const method = editingId ? 'PUT' : 'POST'
      const url = editingId
        ? `http://localhost:5000/api/projects/${editingId}`
        : 'http://localhost:5000/api/projects'

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: formDataToSend
      })

      if (res.ok) {
        setIsOpen(false)
        setFormData({
          title: '',
          category: 'Commercial',
          location: '',
          year: new Date().getFullYear().toString(),
          description: '',
          client: '',
          area: '',
          engineeringChallenges: '',
          technicalSolutions: '',
          results: '',
          image: null
        })
        setEditingId(null)
        fetchProjects()
      }
    } catch (error) {
      console.error('Error saving project:', error)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        })
        fetchProjects()
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      category: project.category,
      location: project.location,
      year: project.year,
      description: project.description || '',
      client: project.client || '',
      area: project.area || '',
      engineeringChallenges: project.engineeringChallenges,
      technicalSolutions: project.technicalSolutions,
      results: project.results,
      image: null
    })
    setEditingId(project._id)
    setIsOpen(true)
  }

  if (loading) return <LoadingSpinner />

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-3xl font-bold'>Projects</h2>
          <p className='text-muted-foreground'>
            Manage your portfolio projects
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className='gap-2' onClick={() => setEditingId(null)}>
              <Plus className='w-4 h-4' />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle>
                {editingId ? 'Edit Project' : 'Add New Project'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                {/* Project Title */}
                <Input
                  placeholder='Project Title'
                  value={formData.title}
                  onChange={e =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />

                {/* Category Dropdown */}
                <select
                  className='w-full px-3 py-2 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500'
                  value={formData.category}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                >
                  <option value='' disabled>
                    Select Category
                  </option>
                  <option value='Commercial'>Commercial</option>
                  <option value='Industrial'>Industrial</option>
                  <option value='Infrastructure'>Infrastructure</option>
                  <option value='Residential'>Residential</option>
                  <option value='Spiritual'>Spiritual</option>
                </select>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <Input
                  placeholder='Location'
                  value={formData.location}
                  onChange={e =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder='Year'
                  value={formData.year}
                  onChange={e =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                  required
                />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <Input
                  placeholder='Client'
                  value={formData.client}
                  onChange={e =>
                    setFormData({ ...formData, client: e.target.value })
                  }
                />
                <Input
                  placeholder='Area'
                  value={formData.area}
                  onChange={e =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                />
              </div>

              <Textarea
                placeholder='Description'
                value={formData.description}
                onChange={e =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={2}
              />

              <Textarea
                placeholder='Engineering Challenges'
                value={formData.engineeringChallenges}
                onChange={e =>
                  setFormData({
                    ...formData,
                    engineeringChallenges: e.target.value
                  })
                }
                rows={3}
                required
              />

              <Textarea
                placeholder='Technical Solutions'
                value={formData.technicalSolutions}
                onChange={e =>
                  setFormData({
                    ...formData,
                    technicalSolutions: e.target.value
                  })
                }
                rows={3}
                required
              />

              <Textarea
                placeholder='Results'
                value={formData.results}
                onChange={e =>
                  setFormData({ ...formData, results: e.target.value })
                }
                rows={3}
                required
              />

              <div className='flex items-center gap-2'>
                <ImageIcon className='w-4 h-4' />
                <input
                  type='file'
                  accept='image/*'
                  onChange={e =>
                    setFormData({
                      ...formData,
                      image: e.target.files?.[0] || null
                    })
                  }
                  className='flex-1'
                />
              </div>

              <Button type='submit' className='w-full'>
                {editingId ? 'Update Project' : 'Create Project'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className='grid gap-4'>
        {projects.map(project => (
          <Card
            key={project._id}
            className='p-4 hover:shadow-lg transition-shadow'
          >
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <h3 className='font-bold text-lg'>{project.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {project.category} • {project.location} • {project.year}
                </p>
                <p className='text-sm mt-2'>{project.description}</p>
              </div>
              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => handleEdit(project)}
                  className='gap-2'
                >
                  <Edit2 className='w-4 h-4' />
                </Button>
                <Button
                  variant='destructive'
                  size='sm'
                  onClick={() => handleDelete(project._id)}
                  className='gap-2'
                >
                  <Trash2 className='w-4 h-4' />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AdminProjects
