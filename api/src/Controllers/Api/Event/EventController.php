<?php

namespace Controllers\Api\Event;

use App\Http\Controllers\Controller;
use Controllers\Api\Event\Responses\EventResource;
use Domain\Event\Model\Event;
use Illuminate\Http\Resources\Json\JsonResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResource
    {
        return EventResource::collection(Event::all());
    }

}
